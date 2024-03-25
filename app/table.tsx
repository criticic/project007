import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';
import Link from 'next/link';
import { getPartyInfo } from '../data/party_list';

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
    return num;
  }
}


export function PartyTable({ partyData }: { partyData: PartyData }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Party</TableHeaderCell>
          <TableHeaderCell>Party Code</TableHeaderCell>
          <TableHeaderCell>Total Amount</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.entries(partyData).map(([party, summary]) => (
          <TableRow key={party}>
            <TableCell><Link href={`/parties/${getPartyInfo(party).short_name}`}>{getPartyInfo(party).proper_name}</Link></TableCell>
            <TableCell>{getPartyInfo(party).short_name}</TableCell>
            <TableCell>
              <Text>{formatIndianCurrency(summary.total_amount + summary.predata_amount)}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function DonorTable({ donorData }: { donorData: DonorData }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Donor</TableHeaderCell>
          <TableHeaderCell>Total Amount</TableHeaderCell>
          <TableHeaderCell>Expired Amount</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.entries(donorData).map(([donor, summary]) => (
          <TableRow key={donor}>
            <TableCell><Link href={`/donors/${donor}`}>{donor}</Link></TableCell>
            <TableCell>
              <Text>{formatIndianCurrency(summary.total_amount)}</Text>
            </TableCell>
            <TableCell>
              <Text>{formatIndianCurrency(summary.expired_amount)}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}