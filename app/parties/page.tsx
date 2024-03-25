"use client";

import { Card, Title, Text, Grid, DonutChart } from '@tremor/react';
import Search from '../search';
import { PartyTable } from '../table';

import data from '../../data/party_summary';
import { getPartyInfo } from '../../data/party_list';

// example data
// const data: PartyData = {
//   "ALL INDIA ANNA DRAVIDA MUNNETRA KAZHAGAM": {
//       "total_amount": 0,
//       "total_transactions": 0,
//       "donor_donations": {},
//       "predata_bonds": 38,
//       "predata_amount": 60500000
//   },
//   "BAHUJAN SAMAJ PARTY": {

interface PartySummary {
  total_amount: number;
  total_transactions: number;
  donor_donations: { [donor: string]: number };
  predata_bonds: number;
  predata_amount: number;
}

interface PartyData {
  [party: string]: PartySummary;
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

export default function PartyList({
  searchParams
}: {
  searchParams: { q: string };
}) {
  // if no search query, show all parties
  let filteredData = data;
  if (searchParams.q) {
    filteredData = Object.fromEntries(
      Object.entries(data).filter(([party]) =>
        party.toLowerCase().includes(searchParams.q.toLowerCase())
      )
    );
  }


  // sort data based on total amount + predata amount
  const sortedData: PartyData = Object.fromEntries(
    Object.entries(filteredData)
      .sort(
        ([, a], [, b]) =>
          b.total_amount + b.predata_amount - (a.total_amount + a.predata_amount)
      )
  );


  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Parties</Title>
      <Text>List of Political Parties which recieved funding through Electoral Bonds</Text>
      <Grid numItemsSm={1} numItemsLg={2} className="gap-6">
        <Card>
          <Title>Summary</Title>
          <Title>Total Parties: {Object.keys(data).length}</Title>
          <Title>Total Amount Received: {formatIndianCurrency(Object.values(data).reduce((acc, party) => acc + party.total_amount + party.predata_amount, 0))}</Title>
          <Title>Total Bonds Redeemed: {Object.values(data).reduce((acc, party) => acc + party.total_transactions + party.predata_bonds, 0)}</Title>
          <Text>We have no information about {Object.values(data).reduce((acc, party) => acc + party.predata_bonds, 0)} bonds worth {formatIndianCurrency(Object.values(data).reduce((acc, party) => acc + party.predata_amount, 0))}</Text>
        </Card>
        <Card>
          <Title>Top Parties</Title>
          <DonutChart
            data={Object.entries(sortedData).map(([name, party]) => ({
              value: party.total_amount + party.predata_amount,
              name: getPartyInfo(name).proper_name,
            }))}
            valueFormatter={(number: number) =>
              formatIndianCurrency(number)
            } />
        </Card>
      </Grid>
      <Search />
      <Card className="mt-6">
        <PartyTable partyData={sortedData} />
      </Card>
    </main>
  );
}
