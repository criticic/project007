import { Card, Title, Text } from '@tremor/react';
import Search from '../search';
import { DonorTable } from '../table';

import data from '../../data/donor_summary';

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

export default async function PartyList({
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

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Donors</Title>
      <Text>List of Companies/Individuals who donated to Political Parties</Text>
      <Search />
      <Card className="mt-6">
        <DonorTable donorData={sortedData} />
      </Card>
    </main>
  );
}
