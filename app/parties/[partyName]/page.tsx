'use client';

import { Card, Metric, Text, Title, BarList, Grid, DonutChart } from '@tremor/react';

import data from '../../../data/party_summary';
import { getPartyInfo, getPartyFullName } from '../../../data/party_list';
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


export default function PartyDescriptionPage({ params }: { params: { partyName: string } }) {

    const partyCode = decodeURIComponent(params.partyName);
    const partyFullName = getPartyFullName(partyCode);

    const partySummary: PartySummary = data[partyFullName!];

    // sort donor donations
    const donorDonations = Object.entries(partySummary.donor_donations)
        .sort(([, a], [, b]) => b - a);

    // Donors with donations greater than 10 crore
    const topDonors = donorDonations.filter(([, value]) => value > partySummary.total_amount * 0.01);
    const otherDonors = donorDonations.filter(([, value]) => value <= partySummary.total_amount * 0.01);
    const otherDonorsTotal = otherDonors.reduce((acc, [, value]) => acc + value, 0);

    topDonors.push(['Others', otherDonorsTotal]);

    return (
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <Title>{getPartyInfo(partyFullName).proper_name} {'-'} {partyCode}</Title>
            <Grid numItemsSm={1} numItemsLg={1} className="gap-6">
            <Grid numItemsSm={1} numItemsLg={2} className="gap-6">
                <Card>
                    <Title>Total Amount</Title>
                    <Metric>{formatIndianCurrency(partySummary.total_amount + partySummary.predata_amount)}</Metric>
                    <Title>Total Bonds Redeemed: {partySummary.total_transactions}</Title>
                    <Text>We have no information about {partySummary.predata_bonds} bonds worth {formatIndianCurrency(partySummary.predata_amount)}</Text>
                </Card>
                <Card>
                    <Title>Top Donors</Title>
                    <DonutChart
                        data={topDonors.map(([name, value]) => ({
                            value,
                            name,
                        }))}
                        valueFormatter={(number: number) =>
                            formatIndianCurrency(number)
                        }
                    />
                </Card>
                </Grid>
                <Card>
                    <Title>Top Donors (Amount {'>'} 1% of total amount)</Title>
                    <BarList
                        data={topDonors.map(([name, value]) => ({
                            value,
                            name,
                        }))}
                        valueFormatter={(number: number) =>
                            formatIndianCurrency(number)
                        }
                    />
                </Card>
            </Grid>
        </main>
    );
}