'use client';

import { Card, Metric, Text, Title, BarList, Grid, DonutChart } from '@tremor/react';
import Link from 'next/link';

import data from '../../../data/donor_summary';
import { getPartyInfo, getPartyFullName } from '../../../data/party_list';

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

export default function DonorDescriptionPage({ params }: { params: { donorName: string } }) {
        const donorName = decodeURIComponent(params.donorName);
        console.log(donorName);
        const donorSummary: DonorSummary = data[donorName];
    
        // sort party donations
        const partyDonations = Object.entries(donorSummary.party_donations)
            .sort(([, a], [, b]) => b - a);
    
        // Parties with donations greater than 10 crore
        const topParties = partyDonations
    
        return (
            <main className="p-4 md:p-10 mx-auto max-w-7xl">
                <Title>Donor</Title>
                <Text>{donorName}</Text>
                <Grid numItemsSm={1} numItemsLg={1} className="gap-6">
            <Grid numItemsSm={1} numItemsLg={2} className="gap-6">
                <Card>
                    <Title>Total Amount Paid</Title>
                    <Metric>{formatIndianCurrency(donorSummary.total_amount)}</Metric>
                    <Title>Total Bonds: {donorSummary.total_transactions}</Title>
                    <Text> {donorSummary.expired_bonds} bonds expired with a total amount of {formatIndianCurrency(donorSummary.expired_amount)}</Text>
                    <Text> Expired Bonds are donated to the PM Relief Fund</Text>
                    <Title><Link href={`https://www.thecompanycheck.com/search/${donorName}`}>Check Company Details</Link></Title>
                </Card>
                <Card>
                    <Title>Top Parties</Title>
                    <DonutChart
                        data={topParties.map(([name, value]) => ({
                            value,
                            name: getPartyInfo(name).proper_name,
                        }))}
                        valueFormatter={(number: number) =>
                            formatIndianCurrency(number)
                        }
                    />
                </Card>
                </Grid>
                <Card>
                    <Title>Top Parties</Title>
                    <BarList
                        data={topParties.map(([name, value]) => ({
                            value,
                            name: getPartyInfo(name).proper_name,
                            href: `/parties/${getPartyInfo(name).short_name}`,
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