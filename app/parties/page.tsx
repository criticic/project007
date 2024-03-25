import { Card, Title, Text } from '@tremor/react';
import Search from '../search';
import { PartyTable } from '../table';

import data from '../../data/party_summary';

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

export default async function PartyList({
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
      <Search />
      <Card className="mt-6">
        <PartyTable partyData={sortedData} />
      </Card>
    </main>
  );
}
