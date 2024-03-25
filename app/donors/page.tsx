"use client"
import React, { useState } from 'react';
import { Card, Title, Text, Grid, DonutChart, Button } from '@tremor/react';
import Search from '../search';
import { DonorTable } from '../table';

import data from '../../data/donor_summary';
import { getPartyInfo } from '../../data/party_list';

interface DonorSummary {
  total_amount: number;
  total_transactions: number;
  party_donations: { [party: string]: number };
  expired_bonds: number;
  expired_amount: number;
}

interface DonorData {
  [donor: string]: DonorSummary;
}

function formatIndianCurrency(num: number) {
  const crore = 10000000;
  const lakh = 100000;
  const thousand = 1000;

  if (num >= crore) {
      return `${num / crore} Crore`;
  } else if (num >= lakh) {
      return `${num / lakh} Lakh`;
  } else if (num >= thousand) {
      return `${num / thousand} Thousand`;
  } else {
      return num.toString();
  }
}

export default function DonorList({
  searchParams
}: {
  searchParams: { q: string };
}) {
  let filteredData = data;
  if (searchParams.q) {
    filteredData = Object.fromEntries(
      Object.entries(data).filter(([party]) =>
        party.toLowerCase().includes(searchParams.q.toLowerCase())
      )
    );
  }

  const sortedData: DonorData = Object.fromEntries(
    Object.entries(filteredData).sort(
      ([, a], [, b]) =>
        b.total_amount - a.total_amount || b.expired_amount - a.expired_amount
    )
  );

  // filter out top donors who have donated more than total amount * 0.01
  const topDonors: DonorData = Object.fromEntries(
    Object.entries(sortedData).filter(
      ([, { total_amount }]) => total_amount > Object.values(data).reduce((acc, { total_amount }) => acc + total_amount, 0) * 0.005
    )
  );

  const otherDonors: DonorData = Object.fromEntries(
    Object.entries(sortedData).filter(
      ([, { total_amount }]) => total_amount <= Object.values(data).reduce((acc, { total_amount }) => acc + total_amount, 0) * 0.005
    )
  );
  
  const otherDonorsTotal = Object.values(otherDonors).reduce((acc, { total_amount }) => acc + total_amount, 0);
  topDonors['Others'] = {
    total_amount: otherDonorsTotal,
    total_transactions: Object.values(otherDonors).reduce((acc, { total_transactions }) => acc + total_transactions, 0),
    party_donations: {},
    expired_bonds: Object.values(otherDonors).reduce((acc, { expired_bonds }) => acc + expired_bonds, 0),
    expired_amount: Object.values(otherDonors).reduce((acc, { expired_amount }) => acc + expired_amount, 0),
  };

  const [toShowTopDonors, setToShowTopDonors] = useState(true);
  let dataSource = toShowTopDonors ? topDonors : sortedData;

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Donors</Title>
      <Text>List of Companies/Individuals who donated to Political Parties</Text>
      <Grid numItemsSm={1} numItemsLg={2} className="gap-6">
        <Card>
          <Title>Summary</Title>
          <Title>Total Companies: {Object.keys(data).length} (Duplicates Present)</Title>
          <Title>Total Bonds: {Object.values(data).reduce((acc, { total_transactions }) => acc + total_transactions, 0)}</Title>
          <Title>Total Amount Received: {formatIndianCurrency(Object.values(data).reduce((acc, { total_amount }) => acc + total_amount, 0))}</Title>
          <Title>Expired Bonds: {Object.values(data).reduce((acc, { expired_bonds }) => acc + expired_bonds, 0)}</Title>
          <Title>Total Expired Amount: {formatIndianCurrency(Object.values(data).reduce((acc, { expired_amount }) => acc + expired_amount, 0))}</Title>
          <Text>Expired Bonds are donated to the PM Relief Fund</Text>
        </Card>
        <Card>
          <Title>Top Companies</Title>
          <DonutChart
            data={Object.entries(dataSource).map(([name, { total_amount }]) => ({
              value: total_amount,
              name,
            }))}
            valueFormatter={(number: number) =>
              formatIndianCurrency(number)
            } />

        </Card>
      </Grid>
      <Search />
      <Button onClick={() => setToShowTopDonors(!toShowTopDonors)}>
        {toShowTopDonors ? 'Show All Donors' : 'Show Top Donors'}
      </Button>
      <Card className="mt-6">
        <Title>{toShowTopDonors ? 'Top Companies' : 'All Companies'}</Title>
        <DonorTable donorData={dataSource} />
      </Card>
    </main>
  );
}
