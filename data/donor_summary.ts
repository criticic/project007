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

const data: DonorData = {
    "A B C INDIA LIMITED": {
        "total_amount": 4000000,
        "total_transactions": 13,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 4000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ACROPOLIS MAINTENANCE SERVICES PRIVATE LIMITED": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ARIHANT ENTERPRISES": {
        "total_amount": 4000000,
        "total_transactions": 4,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 4000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CHOUDHARY GARMENTS": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ESSEL MINING AND INDS LTD": {
        "total_amount": 2245000000,
        "total_transactions": 238,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 500000000,
            "BIJU JANATA DAL": 1745000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GRASIM INDUSTRIES LTD": {
        "total_amount": 330000000,
        "total_transactions": 33,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 230000000,
            "BIJU JANATA DAL": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HIGHSTREET CRUISES AND ENTERTAINMENT PVT  LTD": {
        "total_amount": 3000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INNOCENT MERCHANDISE PVT LTD": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KAMLANG SAW & VENEER MILLS PVT LTD": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MEGHA ENGINEERING AND INFRASTRUCTURES LI MITED": {
        "total_amount": 8210000000,
        "total_transactions": 821,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5190000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 180000000,
            "DRAVIDA MUNNETRA KAZHAGAM (DMK)": 600000000,
            "BHARAT RASHTRA SAMITHI": 1500000000,
            "JANASENA PARTY": 40000000,
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 370000000,
            "TELUGU DESAM PARTY": 280000000,
            "JANATA DAL ( SECULAR )": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MERLIN RECREATION PVT LTD": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MSPL LTD": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MYRIAD DEVELOPERS": {
        "total_amount": 1500000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "OMKAR VENTURES PVT LTD": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PATEL HIGHWAY MANAGEMENT PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PHL FINIVEST PVT LTD": {
        "total_amount": 400000000,
        "total_transactions": 40,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 400000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PIRAMAL CAPITAL AND HOUSING FINANCE LTD": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PIRAMAL ENTERPRISES LTD": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PONUGOTI HEMENDAR RAO": {
        "total_amount": 300000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 300000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RENUKA INVESTMENTS AND FINANCE LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RENUKESHWAR INVESTMENTS PVT LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHIVAM TRANSCON PRIVATE LIMITED": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SKYWORLD DEVELOPERS LLP": {
        "total_amount": 1500000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TEXPORT CREATION": {
        "total_amount": 9000000,
        "total_transactions": 9,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 9000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ALOK NARAYAN PANDEY": {
        "total_amount": 34000000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 34000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BELLWEY INTERNATIONAL CO": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CHHATTISGARH DISTILLERIES LIMITED": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DEMPO INDUSTRIES PVT LTD": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GUJARAT FLUORO CHEMICALS LIMITED": {
        "total_amount": 120000000,
        "total_transactions": 12,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KOTESWAR RAO GULLAPALLY": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MANDADI RAMULU": {
        "total_amount": 400000,
        "total_transactions": 4,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 400000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MOHINDER                                 KUMAR JAIN": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MR RAJ DEEPAK VARSHNEY": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MS PEARL GLOBAL INDUSTRIES LTD FORM": {
        "total_amount": 16000000,
        "total_transactions": 16,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 16000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "OCEAN SPARKLE LTD": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PAPPI REDDY                              KISHORE KUMAR REDDY": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PEDDIREDDY RAMANJANEYA REDDY": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PREMCHAND GODHA": {
        "total_amount": 2200000,
        "total_transactions": 22,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000,
            "BHARATIYA JANATA PARTY": 1000000,
            "SHIVSENA": 700000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRL DEVELOPERS PRIVATE LIMITED": {
        "total_amount": 200000000,
        "total_transactions": 20,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000,
            "SHIVSENA": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAVINDER AGARWAL": {
        "total_amount": 800000,
        "total_transactions": 8,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 800000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SANGIREDDY THIRUPATHI REDDY": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHAHAB RIZVI": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHANKARANARAYANA CONSTRUCTIONS PVT": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SRI KRISHNA INFRAASTRUCTURES": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUN PHARMA LABORATORIES LIMTED": {
        "total_amount": 200000000,
        "total_transactions": 20,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 200000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUN PHARMA LABORATORIES LTD": {
        "total_amount": 115000000,
        "total_transactions": 16,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 115000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SWAPNA CHENNAVARAM": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "UTKAL ALUMINA INTERNATIONAL LIMITED": {
        "total_amount": 1351000000,
        "total_transactions": 136,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000,
            "BHARATIYA JANATA PARTY": 750000000,
            "BIJU JANATA DAL": 600000000
        },
        "expired_bonds": 2,
        "expired_amount": 2000000
    },
    "VARDHMAN TEXTILES LTD": {
        "total_amount": 182500000,
        "total_transactions": 52,
        "party_donations": {
            "SHIROMANI AKALI DAL": 7500000,
            "BHARATIYA JANATA PARTY": 170000000,
            "AAM AADMI PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VASSUDEVA DEMPO FAMILY PRIVATE TRUST": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VINAY AGARWAL": {
        "total_amount": 2100000,
        "total_transactions": 21,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1200000,
            "BHARATIYA JANATA PARTY": 100000,
            "BHARAT RASHTRA SAMITHI": 800000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CAVALIER TRANSPORTERS PRIVATE LIMITED": {
        "total_amount": 8500000,
        "total_transactions": 13,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 8500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "IDEAL REAL ESTATES PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JAI SUSPENSION SYSTEMS LLP": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JUBILANT LIFE SCIENCES LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KEVENTER FOODPARK INFRA LIMITED": {
        "total_amount": 1950000000,
        "total_transactions": 204,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1445000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 200000000,
            "ADYAKSHA SAMAJVADI PARTY": 100000000,
            "ALL INDIA TRINAMOOL CONGRESS": 200000000,
            "SHIROMANI AKALI DAL": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KEYSTONE REALTORS PVT LTD": {
        "total_amount": 49000000,
        "total_transactions": 49,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 6000000,
            "BHARATIYA JANATA PARTY": 30000000,
            "SHIVSENA": 13000000
        },
        "expired_bonds": 1,
        "expired_amount": 1000000
    },
    "MODERN ROAD MAKERS PVT LTD": {
        "total_amount": 130000000,
        "total_transactions": 13,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 60000000,
            "DRAVIDA MUNNETRA KAZHAGAM (DMK)": 20000000,
            "BHARAT RASHTRA SAMITHI": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MUTHOOT FINANCE LTD": {
        "total_amount": 30000000,
        "total_transactions": 30,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "OMKAR REALTORS PROJECTS PVT LTD": {
        "total_amount": 45000000,
        "total_transactions": 9,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 15000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "P SHIVA SHANKAR REDDY": {
        "total_amount": 400000,
        "total_transactions": 4,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 400000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PEGASUS PROPERTIES PVT LTD": {
        "total_amount": 100000000,
        "total_transactions": 19,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "POLINA GANESWARARAO": {
        "total_amount": 400000,
        "total_transactions": 4,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 400000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRIME SALES CORPORATION": {
        "total_amount": 12500000,
        "total_transactions": 26,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 12500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "QUALITY MAINTENANCE VENTURE LTD": {
        "total_amount": 20000000,
        "total_transactions": 20,
        "party_donations": {
            "RASHTRIYA JANTA DAL": 5000000,
            "BHARATIYA JANATA PARTY": 10000000,
            "ALL INDIA TRINAMOOL CONGRESS": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAIPUR BOTLING COMPANY": {
        "total_amount": 10001000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10001000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "S R C CHEMICALS PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SANJAY JAIN": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SDS LOGISTICS PRIVATE LIMITED": {
        "total_amount": 3500000,
        "total_transactions": 8,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 3500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHAURYAVIR CARRIERS PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SK INFRA": {
        "total_amount": 400000,
        "total_transactions": 4,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 400000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SNS CLOTHING PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SREE KRUTHI": {
        "total_amount": 800000,
        "total_transactions": 8,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 800000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ST PATRICKS REALTY PVT LTD": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SWETA ESTATES PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "THE SUPREME INDUSTRIES LTD": {
        "total_amount": 27500000,
        "total_transactions": 23,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 15000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 12500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "UM CABLES LIMITED": {
        "total_amount": 45000000,
        "total_transactions": 45,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 40000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VEDANTA LIMITED": {
        "total_amount": 3756500000,
        "total_transactions": 386,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 2266500000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1040000000,
            "BIJU JANATA DAL": 400000000,
            "JHARKHAND MUKTI MORCHA": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ACE COMERCIAL COMPANY PRIVATE LIMITED": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DEVEN CHAND JAIN": {
        "total_amount": 7000000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 7000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JUPITER MERCANTILES PVT LTD": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 7,
        "expired_amount": 2500000
    },
    "RAJEEV KUMAR JAIN": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AISHWARYA BUSINESS CORPORATION PVT, LTD": {
        "total_amount": 50000000,
        "total_transactions": 14,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANJANI ROADLINES": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "APOLLO TYRES LIMITED": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "B2C CONSULTING LLP": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BAJAJ AUTO LTD": {
        "total_amount": 180000000,
        "total_transactions": 27,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000,
            "AAM AADMI PARTY": 80000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BAJAJ FINANCE LTD": {
        "total_amount": 200000000,
        "total_transactions": 20,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 200000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BAJAJ HOLDINGS & INVESTMENT LIMITED": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BHARTI AIRTEL LIMITEDAIRTEL CURRE NT AC-GCO": {
        "total_amount": 150000000,
        "total_transactions": 33,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 144000000,
            "JAMMU AND KASHMIR NATIONAL CONFERENCE": 5000000,
            "RASHTRIYA JANTA DAL": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BHARTI INFRATEL LIMITED": {
        "total_amount": 120000000,
        "total_transactions": 12,
        "party_donations": {
            "SHIROMANI AKALI DAL": 10000000,
            "BHARATIYA JANATA PARTY": 20000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 80000000,
            "BIHAR PRADESH JANTA DAL(UNITED)": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "FASTWAY TRANSMISSIONS PVT LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "SHIROMANI AKALI DAL": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "FINOLEX CABLES LTD": {
        "total_amount": 200000000,
        "total_transactions": 20,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 180000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GRAUER  AMP  WEIL  INDIA  LIMITED": {
        "total_amount": 100000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HUB POWER COMPANY": {
        "total_amount": 9500000,
        "total_transactions": 14,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 9500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INOX AIR PRODUCTS LTD": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INOX LEISURE LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LAKSHMI NIWAS MITTAL": {
        "total_amount": 350000000,
        "total_transactions": 35,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 350000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LALIT GULATI": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "M/SGAURAV INTERNATIONAL": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 4000000,
            "RASHTRIYA JANTA DAL": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MEHERFOUNDATIONSANDCIVILENGPVT": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MOTOWN TRADING PVT LTD": {
        "total_amount": 3000000,
        "total_transactions": 30,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 500000,
            "AAM AADMI PARTY": 1500000,
            "ALL INDIA TRINAMOOL CONGRESS": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MR. VIJAY KUMAR  GOYAL": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NAVAYUGA  ENGINEERING COMPANY LIMITED": {
        "total_amount": 450000000,
        "total_transactions": 45,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 450000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ORIENT FASHION EXP (I) PVT LTD": {
        "total_amount": 6000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 6000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RICHA & CO": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "RASHTRIYA JANTA DAL": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RICHA GLOBAL EXPORTS PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SAMMAN LAL SHER SINGH PAPERS PVT LT": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SANDEEP KHANNA AND ASSOCIATES": {
        "total_amount": 40000,
        "total_transactions": 4,
        "party_donations": {
            "SHIROMANI AKALI DAL": 40000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SARD INDIA PRIVATE L": {
        "total_amount": 6000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 6000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SARITA HANDA EXPORTS PVT LTD": {
        "total_amount": 3000000,
        "total_transactions": 3,
        "party_donations": {
            "RASHTRIYA JANTA DAL": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SAURABH GUPTA": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHAHIEXP": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIKAS KUMAR GARG": {
        "total_amount": 30000,
        "total_transactions": 3,
        "party_donations": {
            "SHIROMANI AKALI DAL": 30000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VM SALGAOCAR CORPORATION PVT LTD": {
        "total_amount": 3000000,
        "total_transactions": 30,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 2000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "WELSPUN ENTERPRISES LTD": {
        "total_amount": 130000000,
        "total_transactions": 13,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000,
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ADIT BUILD WELL PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "C MACKERTICH PVT LTD": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 4,
        "expired_amount": 4000000
    },
    "CH UDAYA SANKAR": {
        "total_amount": 200000,
        "total_transactions": 2,
        "party_donations": {
            "SHIVSENA": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CV SRINIVASA": {
        "total_amount": 200000,
        "total_transactions": 2,
        "party_donations": {
            "SHIVSENA": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DERIVE TRADING AND RESORTS PRIVATE LIMIT": {
        "total_amount": 65000000,
        "total_transactions": 20,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 15000000,
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DERIVE TRADING AND RESORTS PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GANNON DUNKERLEY AND CO LIMITED": {
        "total_amount": 15000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 15000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GOURAV KUMAR": {
        "total_amount": 30000,
        "total_transactions": 3,
        "party_donations": {
            "SHIROMANI AKALI DAL": 30000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "K RAHEJA CORP PVT LTD": {
        "total_amount": 210000000,
        "total_transactions": 21,
        "party_donations": {
            "SHIVSENA": 10000000,
            "BHARATIYA JANATA PARTY": 20000000,
            "BHARAT RASHTRA SAMITHI": 180000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KAYPEE ENTERPRISES": {
        "total_amount": 270000000,
        "total_transactions": 27,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000,
            "BHARATIYA JANATA PARTY": 140000000,
            "BIJU JANATA DAL": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LOTUS TEXPARK LIMITED FORMERLY LOTUS INT EGRATED TEXPARK LTD": {
        "total_amount": 45000000,
        "total_transactions": 9,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 45000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "M/SKJS AHLUWALIA": {
        "total_amount": 140000000,
        "total_transactions": 14,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 140000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MEENU CREATION LLP": {
        "total_amount": 6000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 6000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MR SAURABH BAKLIWAL": {
        "total_amount": 11000000,
        "total_transactions": 11,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 3000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 4000000,
            "ALL INDIA TRINAMOOL CONGRESS": 4000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "OM METALS DEVELOPERS (P) LTD.": {
        "total_amount": 90000000,
        "total_transactions": 18,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 15000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000,
            "ALL INDIA TRINAMOOL CONGRESS": 55000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "R SURYA NARAYNARAJU": {
        "total_amount": 200000,
        "total_transactions": 2,
        "party_donations": {
            "SHIVSENA": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RADICO KHAITAN LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "S D CORPORATION PVT LTD": {
        "total_amount": 170000000,
        "total_transactions": 17,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 170000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHIVALIK PRINTS LIMITED": {
        "total_amount": 13500000,
        "total_transactions": 9,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000,
            "BHARATIYA JANATA PARTY": 3500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SPPL PROPERTY MANAGEMENT PVT LTD": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "STAR CEMENT MEGHALAYA LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 14,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 45000000,
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUDHA COMMERCIAL COMPANY LTD": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 3,
        "expired_amount": 3000000
    },
    "SULA VINEYARDS PVT LTD": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "SHIVSENA": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "T SIRISH BABU": {
        "total_amount": 200000,
        "total_transactions": 2,
        "party_donations": {
            "SHIVSENA": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "UNNIKRISHNAN K": {
        "total_amount": 11000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 11000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VAMONA DEVELOPERS PRIVATE LIMITED": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "SHIVSENA": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AIS DISTRIBUTION": {
        "total_amount": 25000000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ECL FINANCE LTD": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 20,
        "expired_amount": 20000000
    },
    "EDELWEISS HOUSING FINANCE LTD.": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "EDELWEISS RURAL   CORPORATE SERVICE": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 10,
        "expired_amount": 10000000
    },
    "FORCE MOTORS LTD": {
        "total_amount": 63500000,
        "total_transactions": 23,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 63500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INDUSTRIAL TECHNO MAN POWER SUPPLY AND SERVICES PVT LTD": {
        "total_amount": 90000000,
        "total_transactions": 9,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 90000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ISHAN TECHNICAL PLANT SERVICES PVT LTD": {
        "total_amount": 160000000,
        "total_transactions": 16,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 160000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JAI BHARAT TECHNICAL SERVICES PVT LTD": {
        "total_amount": 105000000,
        "total_transactions": 15,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 105000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JAI SUSPENSION SYSTEMS L L P": {
        "total_amount": 4000000,
        "total_transactions": 13,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 4000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MADHYA PRADESH WASTE MANAGEMENT PR": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PVR LTD": {
        "total_amount": 20000000,
        "total_transactions": 11,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "REAL TECHNICAL SOLUTIONS PVT LTD": {
        "total_amount": 110000000,
        "total_transactions": 11,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 110000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ROSHINI DEVELOPERS PRIVATE LTD": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TALENTO TECHNICAL PLANT SERVICES PVT LTD": {
        "total_amount": 120000000,
        "total_transactions": 12,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 120000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AMBUJA HOUSING AND URBAN INFRASTRUCTURE  CO. LTD.": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "NATIONALIST CONGRESS PARTY MAHARASHTRA PRADESH": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AMBUJA REALTY EVENTS MANAGMENT LTD": {
        "total_amount": 15000000,
        "total_transactions": 15,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 10000000,
            "NATIONALIST CONGRESS PARTY MAHARASHTRA PRADESH": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "COMFORT TRIMS PRIVATE LIMITED": {
        "total_amount": 25000000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GHCL LTD": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GUWAHATI CARBON LIMITED": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HALDIA ENERGY LIMITED": {
        "total_amount": 3770000000,
        "total_transactions": 395,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 810000000,
            "ALL INDIA TRINAMOOL CONGRESS": 2810000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 150000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HITECH SYSTEMS & SERVICES LTD": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INDIA GLYCOLS LTD": {
        "total_amount": 39900000,
        "total_transactions": 21,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 39900000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JINDAL POLY FILMS LIMITED": {
        "total_amount": 35000000,
        "total_transactions": 8,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000,
            "SHIVSENA": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PHILIPS CARBON BLACK LTD": {
        "total_amount": 50000000,
        "total_transactions": 14,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "REGENT ELECTRO MECH PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TORRENT  POWER  LIMITED": {
        "total_amount": 865000000,
        "total_transactions": 100,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 580000000,
            "NATIONALIST CONGRESS PARTY MAHARASHTRA PRADESH": 35000000,
            "SHIVSENA": 30000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 170000000,
            "AAM AADMI PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TORRENT PHARMACEUTICALS LIMITED": {
        "total_amount": 350000000,
        "total_transactions": 44,
        "party_donations": {
            "AAM AADMI PARTY": 10000000,
            "BHARATIYA JANATA PARTY": 290000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ZENSAR TECHNOLOGIES LTD": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BISHAN M AGARWAL": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BRIGHT STAR INVESTMENTS PVT.LTD": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CEAT LTD": {
        "total_amount": 60000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 60000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DERIVE INVESTMENTS": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DR.REDDY'S LABORATORIES LTD": {
        "total_amount": 800000000,
        "total_transactions": 80,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 320000000,
            "BHARATIYA JANATA PARTY": 240000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 140000000,
            "TELUGU DESAM PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ITC LIMITED": {
        "total_amount": 65575000,
        "total_transactions": 46,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 49546000,
            "BHARAT RASHTRA SAMITHI": 16029000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "IVL DHUNSERI PETROCHEM INDUSTRIES PRIVAT E LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KISHAN M AGARWAL": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "M R F LIMITED": {
        "total_amount": 1500000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MADANLAL LTD.": {
        "total_amount": 1855000000,
        "total_transactions": 199,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1755000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SARITA MIRANIA AGARWAL": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SEEMA MIRANIA AGARWAL": {
        "total_amount": 3000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHANKARRESOURCESPVTLTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHREE CEMENT LIMITED": {
        "total_amount": 15000000,
        "total_transactions": 6,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 15000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SITARA DIAMOND PRIVATE LIMITED": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "SHIVSENA": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SWAL CORPORATION LIMITED": {
        "total_amount": 350000000,
        "total_transactions": 35,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 350000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HIND TERMINALS PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INFOTELACCESSENTERPRISESPL00108": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INFOTELBUSINESSSOLUTIONSLTDBR": {
        "total_amount": 150000000,
        "total_transactions": 15,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 150000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INFOTELTECHNOLOGIESPRIVATELIMITE": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KEC INTERNATIONAL LIMITED": {
        "total_amount": 110000000,
        "total_transactions": 11,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 110000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LUMAX INDUSTRIES LIMITED": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NEXG DEVICES PVT LTD": {
        "total_amount": 350000000,
        "total_transactions": 35,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 350000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "S.S.EARTHMOVERS AND LOGISTICS": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "WELSPUN CORP LTD": {
        "total_amount": 140000000,
        "total_transactions": 14,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000,
            "BHARATIYA JANATA PARTY": 90000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASHUTOSH JYOTIPRASAD TAPARIA": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ATHENA INFRASTRUCTURE LIMITED": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BAGDOGRA REALTORS PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BG SHIRKE CONSTRUCTION TECHNOLOGY PVT LTD": {
        "total_amount": 15000000,
        "total_transactions": 6,
        "party_donations": {
            "AAM AADMI PARTY": 10000000,
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ENAM HOLDINGS PRIVATE LIMITED": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ESTEE TRANSWAYS PRIVATE LIMITE": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "FAMY ENERGY PRIVATE LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "FAMY STERI PVT LIMITED": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INDRANI PATNAIK": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INTERGLOBE AIR TRANSPORT LIMITED": {
        "total_amount": 110000000,
        "total_transactions": 11,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 110000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INTERGLOBE REAL ESTATE VENTURES PVT LTD": {
        "total_amount": 200000000,
        "total_transactions": 20,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 200000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JBM INDUSTRIES LIMITED": {
        "total_amount": 12500000,
        "total_transactions": 8,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 12500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JMC PROJECTS  INDIA  LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "K K RESOURCES PRIVATE LIMITED": {
        "total_amount": 25000000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LUCINA LAND DEVELOPMENT LIMITED": {
        "total_amount": 200000000,
        "total_transactions": 20,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 200000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "M/S VISION SECURITY SERVICES, PROP-MAJOR  DEVENDRA NATH DAS": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MAKARAND PLANTATIONS PVT LIMITED": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MR. ABHIJEET SOLOMAN KAMBLE": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 4,
        "expired_amount": 4000
    },
    "MYTRAH ENERGY(INDIA) PRIVATE LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NARBHERAM VISHRAM": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "OM CREDIT PVT LTD": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 30000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "S.P. SINGLA CONSTRUCTIONS PRIVATE LTD.": {
        "total_amount": 7500000,
        "total_transactions": 12,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 7500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SAROSH ALIZAH MINING": {
        "total_amount": 25000000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SELENE CONSTRUCTIONS LIMITED": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SMR AUTOMOTIVE SYSTEMS INDIA LTD": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SYLVANUS PROPERTIES LIMITED": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "THAKUR PRASAD SAO & SONS PVT LT": {
        "total_amount": 50000000,
        "total_transactions": 14,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "URMILA DEVI TAPARIA": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ALMIGHTY FINANCE AND INVESTMENT P": {
        "total_amount": 3000000,
        "total_transactions": 3,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "G M HOLDINGS PVT LTD": {
        "total_amount": 4000000,
        "total_transactions": 4,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 4000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUNSHINE FINTRADE PVT LTD": {
        "total_amount": 4000000,
        "total_transactions": 4,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 4000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "FAIRPLAN VINTRADE PRIVATE LIMITED": {
        "total_amount": 7000000,
        "total_transactions": 7,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 7000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CHAKRADHARI TRADELINK PRIVATE LIMIT": {
        "total_amount": 12000000,
        "total_transactions": 12,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 3000000,
            "BHARATIYA JANATA PARTY": 9000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CHITRAKUT HOLDINGS LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DAFFODIL GOODS PRIVATE LIMITED": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LILAC MERCHANDISE PRIVATE LIMITED": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MAHAVIRA VINCOM PRIVATE LIMITED": {
        "total_amount": 3000000,
        "total_transactions": 3,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ALLANA COLD STORAGE": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "SHIVSENA": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ALLANASONS PRIVATE L": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "SHIVSENA": 20000000,
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AVEES TRADING & FINANCE PVT LTD": {
        "total_amount": 240000000,
        "total_transactions": 24,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 240000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "FRIGORIFICO ALLANA P": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "SHIVSENA": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NIRMALDEEP RESOURCES LTD": {
        "total_amount": 4000000,
        "total_transactions": 4,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 4000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TAQUITO LEASE OPERATORS PVT. LTD": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CIPLA LTD": {
        "total_amount": 70000000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 70000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CONFIDENT FINANCIAL CONSULTANCY PRI": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PERFECT INVESTMENT CONSULTANCY PRIV": {
        "total_amount": 1800000,
        "total_transactions": 9,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 1800000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SIDHANT INVESTMENT ADVISORY PRIVATE": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SKP MERCHANTS LLP": {
        "total_amount": 80000000,
        "total_transactions": 8,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 30000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CIPLA LIMITED": {
        "total_amount": 322000000,
        "total_transactions": 34,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 300000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 22000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PUSHKARA COMMOSALES PRIVATE LIMITED": {
        "total_amount": 7500000,
        "total_transactions": 12,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 7500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ROOPREKHA VYAPAAR PRIVATE LIMITED": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CENTURY TEXTILES AND INDUSTRIES LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "SHIVSENA": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MANKIND TRACOM PRIVATE LIMITED": {
        "total_amount": 6000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 6000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MKJ ENTERPRISES LTD": {
        "total_amount": 640700000,
        "total_transactions": 89,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 144200000,
            "ALL INDIA TRINAMOOL CONGRESS": 274000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 222500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NATRAJ GOODS PRIVATE LIMITED": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ULTRA TECH CEMENT LIMITED": {
        "total_amount": 150000000,
        "total_transactions": 24,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 120000000,
            "SHIVSENA": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NATCO PHARMA LTD": {
        "total_amount": 572500000,
        "total_transactions": 64,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 122500000,
            "TELUGU DESAM PARTY": 140000000,
            "BHARATIYA JANATA PARTY": 130000000,
            "BHARAT RASHTRA SAMITHI": 100000000,
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 30000000,
            "JANASENA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRESTIGE HABITAT VENTURES": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRESTIGE NOTTING HILL INVESTMENTS": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRESTIGE SOUTHCITY HOLDINGS": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JNS INSTRUMENTS LTD": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ABHISHEK RATHI": {
        "total_amount": 400000,
        "total_transactions": 4,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 400000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AMRITA AGARWAL": {
        "total_amount": 400000,
        "total_transactions": 4,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 300000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANIL CHANDAK": {
        "total_amount": 900000,
        "total_transactions": 9,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 900000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANSHUL GADIA": {
        "total_amount": 300000,
        "total_transactions": 3,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 300000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANUBHAV CHANDAK": {
        "total_amount": 800000,
        "total_transactions": 8,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 800000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BAPPADITYA ROY": {
        "total_amount": 200000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BHAWNA AGARWAL": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BHAWNA KASAT": {
        "total_amount": 50000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CHANDA INVESTMENT   TRADING CO. PVT": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "NATIONALIST CONGRESS PARTY MAHARASHTRA PRADESH": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CYZACHEM PVT LTD": {
        "total_amount": 7500000,
        "total_transactions": 12,
        "party_donations": {
            "NATIONALIST CONGRESS PARTY MAHARASHTRA PRADESH": 7500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DLF COMMERCIAL DEVELOPERS LIMITED": {
        "total_amount": 1300000000,
        "total_transactions": 130,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1300000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DLF LUXURY HOMES LIMITED": {
        "total_amount": 250000000,
        "total_transactions": 25,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 250000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HARI PRASAD AGARWAL": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HIMANSHU RAJNIKANT SHAH": {
        "total_amount": 200000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JASWANT KUMAR SETHIA": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JAY USHIN LTD": {
        "total_amount": 3300000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 3300000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JAYANTA KUMAR DAS": {
        "total_amount": 100000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JOSYULA VENKATESH": {
        "total_amount": 700000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 200000,
            "ALL INDIA TRINAMOOL CONGRESS": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MAGARPATTA TOWNSHIP DEV AND CONST C": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "NATIONALIST CONGRESS PARTY MAHARASHTRA PRADESH": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MANISH AGARWAL": {
        "total_amount": 200000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MINDA KYORAKU LTD": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MINDARIKA PRIVATE LTD": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NANDED CITY DEVELOPMENT AND CONSTRU": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "NATIONALIST CONGRESS PARTY MAHARASHTRA PRADESH": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NAVARUN SEN": {
        "total_amount": 200000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NCC LIMITED": {
        "total_amount": 600000000,
        "total_transactions": 60,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 600000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NEERAJ GANDHI": {
        "total_amount": 850000,
        "total_transactions": 13,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 300000,
            "ALL INDIA TRINAMOOL CONGRESS": 300000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 250000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PANKAJ PERIWAL": {
        "total_amount": 900000,
        "total_transactions": 9,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 900000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRAHLAD SHARMA": {
        "total_amount": 200000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRAMOD BAJORIA": {
        "total_amount": 1800000,
        "total_transactions": 18,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 300000,
            "ALL INDIA TRINAMOOL CONGRESS": 500000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAHUL TULSIAN": {
        "total_amount": 400000,
        "total_transactions": 4,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 400000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAJESH JAIN": {
        "total_amount": 100000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAJESH KUMAR AGARWAL": {
        "total_amount": 3500000,
        "total_transactions": 17,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 800000,
            "ALL INDIA TRINAMOOL CONGRESS": 700000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAJESH SHARMA": {
        "total_amount": 1700000,
        "total_transactions": 8,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1000000,
            "ALL INDIA TRINAMOOL CONGRESS": 700000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAJIV KUMAR JHA": {
        "total_amount": 100000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAMAWATAR SHARMA": {
        "total_amount": 200000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAMESH TAPARIA": {
        "total_amount": 200000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAVI KUMAR SHARMA": {
        "total_amount": 300000,
        "total_transactions": 3,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 300000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ROHIT AGARWAL": {
        "total_amount": 150000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 150000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SEZ BIOTECH SERVICES PVT LTD": {
        "total_amount": 7500000,
        "total_transactions": 12,
        "party_donations": {
            "NATIONALIST CONGRESS PARTY MAHARASHTRA PRADESH": 7500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHIRISH BAJAJ": {
        "total_amount": 100000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SOHAN SARAF": {
        "total_amount": 100000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUBHASH CHANDRA GUPTA": {
        "total_amount": 100000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUKHBIR SINGH": {
        "total_amount": 300000,
        "total_transactions": 3,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 300000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUMITRA DEVI AGARWAL": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUNDEEP JHUNJHUNWALA": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "UPL LIMITED": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VAIBHAV BHUTANI": {
        "total_amount": 200000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIKASH JHUNJHUNWALA": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIKRAM KUMAR KHAITAN": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VINAY KUMAR GANERIWAL": {
        "total_amount": 200000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "YOGESH GARODIA": {
        "total_amount": 100000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GENEXT HARDWARE   PARKS PVT. LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "SHIVSENA": 30000000,
            "BHARATIYA JANATA PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INFINA FINANCE PRIVATE LIMITED": {
        "total_amount": 600000000,
        "total_transactions": 60,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 600000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KANHA VINCOM PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MAHALAXMI VIDYUT PVT.LTD.": {
        "total_amount": 60000000,
        "total_transactions": 24,
        "party_donations": {
            "SHIVSENA": 25000000,
            "NATIONALIST CONGRESS PARTY MAHARASHTRA PRADESH": 25000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ORIENTAL SOUTH DELHI HOTELS PVT LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PURI CONSTRUCTION PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAJIV S SOMANI": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAJU KUMAR SHARMA": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "APCO INFRATECH PVT LTD  FORMERLY AP": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KEJRIWAL MIINIING PRIVATE LIMITED": {
        "total_amount": 40000000,
        "total_transactions": 13,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JINDAL SAW LIMITED": {
        "total_amount": 290000000,
        "total_transactions": 29,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 270000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MS S N MOHANTY": {
        "total_amount": 450000000,
        "total_transactions": 45,
        "party_donations": {
            "BIJU JANATA DAL": 450000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BHARAT AJMERA": {
        "total_amount": 600000,
        "total_transactions": 6,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 600000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CRESCENT POWER LTD": {
        "total_amount": 340000000,
        "total_transactions": 52,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 330000000,
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KIRTAN AJMERA": {
        "total_amount": 1100000,
        "total_transactions": 11,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 1100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LEPTON SOFTWARE EXPORT AND RESEARCH PRIVATE LTD": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "AAM AADMI PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MUKESH AJMERA": {
        "total_amount": 600000,
        "total_transactions": 6,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 600000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "POORVI DUGAR AJMERA": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RONAK AJMERA": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TILAK AJMERA": {
        "total_amount": 600000,
        "total_transactions": 6,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 600000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CASTAMET WORKS PRIVATE LIMITED": {
        "total_amount": 6500000,
        "total_transactions": 11,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 6500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RATNAMANI METALS AND TUBES LTD": {
        "total_amount": 25000000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BANGUR SHREE": {
        "total_amount": 4000000,
        "total_transactions": 4,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 4000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JANAM ENTERPRISES": {
        "total_amount": 3500000,
        "total_transactions": 8,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 3500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KRBL LTD": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "AAM AADMI PARTY": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PENGUIN TRADING & AGENCIES LIMITED": {
        "total_amount": 275000000,
        "total_transactions": 32,
        "party_donations": {
            "BIJU JANATA DAL": 275000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHREE CEMENT LTD": {
        "total_amount": 60000000,
        "total_transactions": 6,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 40000000,
            "RASHTRIYA JANTA DAL": 10000000,
            "BIHAR PRADESH JANTA DAL(UNITED)": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TANUSHREE LOGISTICS PRIVATE LIMITED": {
        "total_amount": 56000000,
        "total_transactions": 20,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 56000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "FRIGERIO CONSERVA AL": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GENUS POWER INFRASTRUCTURES LTD": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "POONAM AGARWAL": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 1,
        "expired_amount": 1000
    },
    "ULTRATECHCEMENTSLTD": {
        "total_amount": 200000000,
        "total_transactions": 20,
        "party_donations": {
            "BIJU JANATA DAL": 100000000,
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "FUTURE GAMING AND HOTEL SERVICES PR": {
        "total_amount": 12050000000,
        "total_transactions": 1205,
        "party_donations": {
            "DRAVIDA MUNNETRA KAZHAGAM (DMK)": 4530000000,
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 1540000000,
            "ALL INDIA TRINAMOOL CONGRESS": 4350000000,
            "BHARATIYA JANATA PARTY": 1000000000,
            "SIKKIM KRANTIKARI MORCHA": 80000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000000,
            "SIKKIM DEMOCRATIC FRONT": 50000000
        },
        "expired_bonds": 3,
        "expired_amount": 30000000
    },
    "UTKAL ALUMINA INTERNATIONAL LTD": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BIJU JANATA DAL": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HARINAGAR SUGAR MILLS LTD": {
        "total_amount": 8000000,
        "total_transactions": 8,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 4000000,
            "BHARATIYA JANATA PARTY": 4000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ARDENT STEEL LIMITED": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "BIJU JANATA DAL": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "G R INFRAPROJECTS L": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "UTKARSH SFATIK LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRAKASH DISTILLERY & CHEMICAL CO (P) LT  D": {
        "total_amount": 25780000,
        "total_transactions": 49,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 1200000,
            "ALL INDIA TRINAMOOL CONGRESS": 16580000,
            "RASHTRIYA JANTA DAL": 8000000
        },
        "expired_bonds": 3,
        "expired_amount": 300000
    },
    "RAMESH AGARWAL C S BOTTLING PLANT": {
        "total_amount": 7500000,
        "total_transactions": 12,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 7200000,
            "BHARATIYA JANATA PARTY": 300000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "S E BUILDERS AND REALTORS LTD": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SAROJIT KUMAR DEY": {
        "total_amount": 33600000,
        "total_transactions": 39,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 5000000,
            "ALL INDIA TRINAMOOL CONGRESS": 28600000
        },
        "expired_bonds": 5,
        "expired_amount": 500000
    },
    "TECH MAHINDRA LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "AAM AADMI PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CASTAMET WORKS": {
        "total_amount": 20000000,
        "total_transactions": 11,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GEOJIT INVESTMENT SERVICES LTD": {
        "total_amount": 1000000,
        "total_transactions": 19,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 750000,
            "BHARATIYA JANATA PARTY": 250000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HIMALAYAN ENDEAVOUR PVT LTD": {
        "total_amount": 129000000,
        "total_transactions": 66,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 14000000,
            "BHARATIYA JANATA PARTY": 1000000,
            "ALL INDIA TRINAMOOL CONGRESS": 112000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "L S DAVAR AND CO": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LAXMI INDUSTRIAL BOTTLING PLAN": {
        "total_amount": 35550000,
        "total_transactions": 63,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 7100000,
            "BHARATIYA JANATA PARTY": 1400000,
            "ALL INDIA TRINAMOOL CONGRESS": 27050000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MONALISA BOTTLING INDUSTRIES PVT LTD": {
        "total_amount": 101500000,
        "total_transactions": 70,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 5000000,
            "ALL INDIA TRINAMOOL CONGRESS": 66500000,
            "BIJU JANATA DAL": 20000000,
            "RASHTRIYA JANTA DAL": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SENGUPTA AND SENGUPTA PRIVATE LIMIT": {
        "total_amount": 92000000,
        "total_transactions": 20,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 14000000,
            "BHARATIYA JANATA PARTY": 1000000,
            "ALL INDIA TRINAMOOL CONGRESS": 77000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SPICEJET LIMITED": {
        "total_amount": 6500000,
        "total_transactions": 20,
        "party_donations": {
            "AAM AADMI PARTY": 6500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TRANSWAYS EXIM PRIVATE LTD": {
        "total_amount": 25000000,
        "total_transactions": 25,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 6000000,
            "BHARATIYA JANATA PARTY": 1000000,
            "ALL INDIA TRINAMOOL CONGRESS": 18000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VARAS INTERNATIONAL PRIVATE LIMITED": {
        "total_amount": 6500000,
        "total_transactions": 11,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 3000000,
            "ALL INDIA TRINAMOOL CONGRESS": 3500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AUROBINDO PHARMA LIMITED": {
        "total_amount": 490000000,
        "total_transactions": 58,
        "party_donations": {
            "TELUGU DESAM PARTY": 25000000,
            "BHARAT RASHTRA SAMITHI": 150000000,
            "BHARATIYA JANATA PARTY": 315000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BHARTI AIRTEL LIMITED": {
        "total_amount": 1830000000,
        "total_transactions": 183,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1830000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BHARTI TELEMEDIA LIMITED": {
        "total_amount": 370000000,
        "total_transactions": 37,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 370000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HH IRON AND STEEL PRIVATE LIMITED": {
        "total_amount": 200000000,
        "total_transactions": 20,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 150000000,
            "BIJU JANATA DAL": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KAL RADIO LIMITED": {
        "total_amount": 35000000,
        "total_transactions": 8,
        "party_donations": {
            "DRAVIDA MUNNETRA KAZHAGAM (DMK)": 35000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MKK METAL SECTIONS P LTD": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PHILLIPS CARBON BLACK LIMITED": {
        "total_amount": 300000000,
        "total_transactions": 30,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 100000000,
            "BHARATIYA JANATA PARTY": 200000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHYAM STEEL MANUFACTURING LTD. (FLY SOVA  ISPAT LTD.)": {
        "total_amount": 30000000,
        "total_transactions": 30,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SOUTH ASIA FM LIMITED": {
        "total_amount": 35000000,
        "total_transactions": 8,
        "party_donations": {
            "DRAVIDA MUNNETRA KAZHAGAM (DMK)": 35000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUN DISTRIBUTION SERVICES PVT LTD": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "DRAVIDA MUNNETRA KAZHAGAM (DMK)": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "THE INDIA CEMENTS LTD": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "DRAVIDA MUNNETRA KAZHAGAM (DMK)": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BALU CEMENT CORPORATION": {
        "total_amount": 60000000,
        "total_transactions": 15,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 45000000,
            "BIJU JANATA DAL": 15000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BALU IRON AND STEEL COMPANY": {
        "total_amount": 160000000,
        "total_transactions": 16,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000,
            "BIJU JANATA DAL": 60000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RUNGTA SONS P LTD": {
        "total_amount": 1000000000,
        "total_transactions": 100,
        "party_donations": {
            "BIJU JANATA DAL": 500000000,
            "BHARATIYA JANATA PARTY": 500000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JINDAL HOUSE": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 90000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MISRILALL MINES PVT LTD": {
        "total_amount": 150000000,
        "total_transactions": 15,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 140000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MOHAN STEEL CORPORATION": {
        "total_amount": 160000000,
        "total_transactions": 16,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 140000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SILVERTOSS SECURITIES PVT LTD": {
        "total_amount": 25000000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AJAY GUPTA": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CRYSTAL TEA INDIA PVT LTD": {
        "total_amount": 12500000,
        "total_transactions": 17,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 12500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "K AMISH KUMAR TRADING PVT LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "N RAMAMOORTHY": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 1,
        "expired_amount": 1000
    },
    "NANGALIA ASSOCIATES": {
        "total_amount": 15000000,
        "total_transactions": 15,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 5000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PURSHOTTAM LAL GUPTA": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAHUL BHATIA": {
        "total_amount": 200000000,
        "total_transactions": 29,
        "party_donations": {
            "NATIONALIST CONGRESS PARTY MAHARASHTRA PRADESH": 38000000,
            "ALL INDIA TRINAMOOL CONGRESS": 162000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAVLON PROPERTIES PVT LTD.": {
        "total_amount": 1000000,
        "total_transactions": 10,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SILVER LINE INVESTMENT COMPANY": {
        "total_amount": 4000000,
        "total_transactions": 4,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 4000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AUSTIN PLYWOOD PRIVATE LIMITED FORMERLY  B S PROGRESSIVE PVT": {
        "total_amount": 17000000,
        "total_transactions": 26,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 13000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 4000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CHANDER COMMERCIALS PVT LTD": {
        "total_amount": 200000000,
        "total_transactions": 20,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 200000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CHANDRAJYOTI ESTATE DEVELOPERS PVT.": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "D R INTERNATIONAL PRIVATE LIMITED": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "D R POLYMERS PVT LTD": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GENUS POWER": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HARDESH ORES PVT LTD": {
        "total_amount": 90000000,
        "total_transactions": 9,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 90000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HONEYWELL PROPERTIES PVT LTD": {
        "total_amount": 300000000,
        "total_transactions": 30,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 300000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ISHANI BHAVIK AJMERA": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JMS MINING  PRIVATE LIMITED": {
        "total_amount": 25000000,
        "total_transactions": 7,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PARESH AJMERA": {
        "total_amount": 200000,
        "total_transactions": 2,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAY CONSTRUCTIONS LTD": {
        "total_amount": 175000000,
        "total_transactions": 22,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 165000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 1,
        "expired_amount": 1000
    },
    "UTSAV ENCLAVE LLP": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ABHIJIT INTERNATIONAL": {
        "total_amount": 30000000,
        "total_transactions": 12,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 5000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 5000000,
            "BHARATIYA JANATA PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ABHINANDANSTOCKBROKINGPVTLTD": {
        "total_amount": 147000000,
        "total_transactions": 48,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 85000000,
            "ALL INDIA TRINAMOOL CONGRESS": 40000000,
            "BIJU JANATA DAL": 12000000,
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AGARWAL  M BISHAN": {
        "total_amount": 3000000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BESSEGGEN INFOTECH LLP": {
        "total_amount": 40000000,
        "total_transactions": 13,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BM DEALERS LLP": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "D S ENGINEERING WORKSHOP LLP": {
        "total_amount": 50000000,
        "total_transactions": 14,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DESCENT BUILDWELL LLP": {
        "total_amount": 25000000,
        "total_transactions": 7,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 10000000,
            "BHARATIYA JANATA PARTY": 10000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DR. MANDEEP SHARMA": {
        "total_amount": 5500000,
        "total_transactions": 10,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2500000,
            "AAM AADMI PARTY": 1000000,
            "ALL INDIA TRINAMOOL CONGRESS": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "FRESHBYTE BUILDTECH PVT LTD": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GOLDSTONE CEMENTS LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GOODLUCK INDIA LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INDIAN VALVE  CALCUTTA  PVT LTD": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JK LAKSHMI CEMENT LIMITED": {
        "total_amount": 140000000,
        "total_transactions": 23,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 140000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "K B DEALERS PRIVATE LIMITED": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "K M A COMMODITIES LLP": {
        "total_amount": 4000000,
        "total_transactions": 4,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 4000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "K M DEALERS LLP": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KB DEALERS LLP": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KISHAN  MIRANIA AGARWAL": {
        "total_amount": 3000000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KM DEALERS LLP": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LEVOC FINANCE PVT LTD": {
        "total_amount": 4000000,
        "total_transactions": 4,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 4000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NORTH EAST INFRA NET WORK": {
        "total_amount": 16500000,
        "total_transactions": 21,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 16500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAMAN SHARMA": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "AAM AADMI PARTY": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SARITA   MIRANIA AGARWAL": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SARITA  MIRANIA AGARWAL": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHRI JAGANNATH STEELS & POWER LTD": {
        "total_amount": 145000000,
        "total_transactions": 46,
        "party_donations": {
            "BIJU JANATA DAL": 140000000,
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SURENDRA STEELS PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "THRIVENI EARTH MOVERS PVT LTD": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "DRAVIDA MUNNETRA KAZHAGAM (DMK)": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BHUDUTT JANGID": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHIV SHANKAR SECURITIES PVT LTD": {
        "total_amount": 8500000,
        "total_transactions": 13,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 8500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIKRAM SINGH": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PURULIA BOTTLING PVT LTD": {
        "total_amount": 50000000,
        "total_transactions": 32,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 25000000,
            "RASHTRIYA JANTA DAL": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ABHAY SHUKLA": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "M/S. K.D. LIQUOR  FERTILIZER PRIVATE L": {
        "total_amount": 35000000,
        "total_transactions": 8,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 35000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "M/S. RAMESH AGARWAL C S BOTTLING PL": {
        "total_amount": 75000000,
        "total_transactions": 75,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 75000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MYTRAH ENERGY INDIA PRIVATE LIMITED": {
        "total_amount": 140000000,
        "total_transactions": 14,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000,
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NAMIT PURI": {
        "total_amount": 3000000,
        "total_transactions": 12,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PLUTO FINANCE PRIVATE LTD": {
        "total_amount": 2400000,
        "total_transactions": 6,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 2400000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RITESH PROJECTS PVT LTD": {
        "total_amount": 53500000,
        "total_transactions": 22,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000,
            "ALL INDIA TRINAMOOL CONGRESS": 31000000,
            "JHARKHAND MUKTI MORCHA": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RITESH REAL ESTATES PVT LTD": {
        "total_amount": 3400000,
        "total_transactions": 7,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 3400000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RITESH VANIJYA PRIVATE LIMITED": {
        "total_amount": 3000000,
        "total_transactions": 3,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SANJAY KUMAR": {
        "total_amount": 4500000,
        "total_transactions": 9,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000,
            "AAM AADMI PARTY": 1500000,
            "ALL INDIA TRINAMOOL CONGRESS": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VPL OIL MARKETING PVT LTD": {
        "total_amount": 4000000,
        "total_transactions": 4,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 4000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DEEPAK KUMAR AGARWAL": {
        "total_amount": 600000,
        "total_transactions": 6,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 600000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DHARIWAL INFRASTRUCTURE LIMITED": {
        "total_amount": 1150000000,
        "total_transactions": 115,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 900000000,
            "BHARATIYA JANATA PARTY": 250000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HIMADRI KHAN COUNTRY SPIRIT BOTTLING PLA NT CUM WARE HOUSE": {
        "total_amount": 7000000,
        "total_transactions": 7,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 7000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRARAMBH SECURITIES PVT LTDOWN A/C": {
        "total_amount": 7500000,
        "total_transactions": 12,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 7500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAJESH M AGRAWAL": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RITESH NIRMAN PVT LTD": {
        "total_amount": 4000000,
        "total_transactions": 4,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 4000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHREE SALASAR PROPERTIES & FINANCE PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SPEED BUSINESS PVT LTD": {
        "total_amount": 4000000,
        "total_transactions": 4,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 4000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SREENATH FINVEST PRIVATE LIMITED": {
        "total_amount": 3000000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SSALASAR  FINANCIAL ADVISORY SERVICE PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUMAN AGARWAL": {
        "total_amount": 400000,
        "total_transactions": 4,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 400000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SWARNAPUSHPA VANIJYA PRIVATE LIMITE": {
        "total_amount": 12500000,
        "total_transactions": 17,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 12500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "J.K.CEMENT LTD.": {
        "total_amount": 100000000,
        "total_transactions": 64,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MIRANIA BUILDERS LLP": {
        "total_amount": 4500000,
        "total_transactions": 9,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 4500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RIPLEY & CO STEVDORING & HANDLING PVT LT D": {
        "total_amount": 85000000,
        "total_transactions": 31,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 85000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUDSAR BUILDSPACE LLP": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "B M A MERCHANDISE LLP": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "COALSALE COMPANY LTD": {
        "total_amount": 9500000,
        "total_transactions": 14,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 9500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GLOWING FERN HIGHRISE LLP": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KISHAN M AGARWAL HUF": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "OM VINCOM PVT LTD": {
        "total_amount": 6000000,
        "total_transactions": 6,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 6000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TIVOLI PARK APARTMENTS PVT LTD": {
        "total_amount": 70000000,
        "total_transactions": 7,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 70000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ARCHANA PROPERTIES  P LTD": {
        "total_amount": 9000000,
        "total_transactions": 9,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 9000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CHAITANYA ESTATES PRIVATE  LIMITED": {
        "total_amount": 6000000,
        "total_transactions": 6,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 6000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DHARMENDRA JAYANTILAL VORA": {
        "total_amount": 1620000,
        "total_transactions": 9,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 1000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 620000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GOURAB ROY": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 3000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SPML OM METALS JV": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "YASHODA SUPER SPECIALITY HOSPITAL": {
        "total_amount": 1620000000,
        "total_transactions": 162,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 640000000,
            "BHARAT RASHTRA SAMITHI": 940000000,
            "BHARATIYA JANATA PARTY": 20000000,
            "AAM AADMI PARTY": 10000000,
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AVEES TRADING FINANCE PVT LTD": {
        "total_amount": 855000000,
        "total_transactions": 90,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 215000000,
            "AAM AADMI PARTY": 100000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 530000000,
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CHARISMA COMBINES PVTLTD": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "M S  VARAS INTERNATIONAL PVT LTD": {
        "total_amount": 38000000,
        "total_transactions": 38,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 33000000,
            "RASHTRIYA JANTA DAL": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "OM ENCLAVE PVT LTD": {
        "total_amount": 3000000,
        "total_transactions": 3,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRB SECURITIES PVT LTD": {
        "total_amount": 40000000,
        "total_transactions": 13,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 5000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000,
            "BIJU JANATA DAL": 15000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAJEEV KUMAR SHARMA": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RANISATI MERCANTILES PVT LTD": {
        "total_amount": 3000000,
        "total_transactions": 3,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RITESH ENCLAVE PVT LTD": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RUPA H SHAH": {
        "total_amount": 2600000,
        "total_transactions": 8,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 1000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1600000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SALASAR SAREES PVT LTD": {
        "total_amount": 1500000,
        "total_transactions": 6,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 1500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SALASAR STOCK BROKING LTD-PROPRIETARY": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TRANSWAYS EXIM PRIVATE LIMITED": {
        "total_amount": 415000000,
        "total_transactions": 226,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 193000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 152000000,
            "AAM AADMI PARTY": 70000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VENUS FINANCIAL CONSULTANTS PVT LTD": {
        "total_amount": 7000000,
        "total_transactions": 7,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 7000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANAND PIMPARKAR": {
        "total_amount": 800000,
        "total_transactions": 8,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 800000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DEEPAK KUMAR GADDHYAN": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAKESH KUMAR SHARMA": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ACHINT MAHESHWARI": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANBEE CONSTRUCTIONS LLP": {
        "total_amount": 45000000,
        "total_transactions": 9,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANIL KUMAR KEDIA": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANUJ KUMAR JAIN": {
        "total_amount": 600000,
        "total_transactions": 6,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 600000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ARUN  KUMAR GANERIWALA": {
        "total_amount": 100000,
        "total_transactions": 1,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ARUN KUMAR GANERIWALA": {
        "total_amount": 100000,
        "total_transactions": 1,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASHOK DALMIA": {
        "total_amount": 300000,
        "total_transactions": 3,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 100000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASISH RAHA": {
        "total_amount": 300000,
        "total_transactions": 3,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 300000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ATUL KUMAR SINGH": {
        "total_amount": 700000,
        "total_transactions": 7,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 700000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CAPE TRADING LLP": {
        "total_amount": 45000000,
        "total_transactions": 9,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CAPSTAN TRADING LLP": {
        "total_amount": 52500000,
        "total_transactions": 12,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 32500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CASA MARIA PROPERTIES LLP": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DEEPAK GURUM": {
        "total_amount": 100000,
        "total_transactions": 1,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GALAXY C.S. BOTTLING PLANT": {
        "total_amount": 36000000,
        "total_transactions": 27,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 31000000,
            "BIJU JANATA DAL": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HITESH D SHAH": {
        "total_amount": 7500000,
        "total_transactions": 21,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 3000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 4500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LAURELSECURITIESPVTLTD": {
        "total_amount": 45000000,
        "total_transactions": 9,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 25000000,
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LIFELINE MARKETING PRIVATE LIMITED": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 10000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MONIKA": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NARAYAN PODDAR": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 300000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NITIN BANSAL": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PALM SHELTER ESTATE DEVELOPMENT LL": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAGHUKOOL ESTATE DEVELOPMENT LLP": {
        "total_amount": 45000000,
        "total_transactions": 9,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAHUL GUPTA": {
        "total_amount": 400000,
        "total_transactions": 4,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 400000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SAGUN TULSYAN": {
        "total_amount": 3000000,
        "total_transactions": 3,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 1000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SANJAY KUMAR SINHA": {
        "total_amount": 400000,
        "total_transactions": 4,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 100000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 300000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TAVINDER SINGH KOHLI": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIKASH GUPTA": {
        "total_amount": 1000000,
        "total_transactions": 10,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 200000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 800000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIKASH NAHATA": {
        "total_amount": 700000,
        "total_transactions": 7,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 700000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VINEET GUPTA": {
        "total_amount": 400000,
        "total_transactions": 4,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 400000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIVEK AGARWAL": {
        "total_amount": 1200000,
        "total_transactions": 12,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 200000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "YOGESH MANPURIA": {
        "total_amount": 1700000,
        "total_transactions": 17,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 700000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AMIT AGARWAL": {
        "total_amount": 100000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANAND AGARWAL": {
        "total_amount": 75000,
        "total_transactions": 12,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 75000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANIL KUMAR MALAWAT": {
        "total_amount": 1300000,
        "total_transactions": 13,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1300000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANKIT AGARWAL": {
        "total_amount": 100000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ARUN KUMAR JOSHI": {
        "total_amount": 700000,
        "total_transactions": 7,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 700000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BIGC MOBILES PVT LTD": {
        "total_amount": 25000000,
        "total_transactions": 7,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BIMALA PRASANNA SINGH ROY": {
        "total_amount": 400000,
        "total_transactions": 4,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 400000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BINOD KUMAR AGARWAL": {
        "total_amount": 1000000,
        "total_transactions": 10,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CROCHET TRADE AND INVESTMENT PVT L": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "IFB AGRO INDUSTRIES LIMITED": {
        "total_amount": 923000000,
        "total_transactions": 95,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 420000000,
            "BIJU JANATA DAL": 63000000,
            "AAM AADMI PARTY": 40000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000,
            "RASHTRIYA JANTA DAL": 350000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MANISH KUMAR KHAKHOLIA": {
        "total_amount": 400000,
        "total_transactions": 4,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 400000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MANOJ KUMAR AGARWAL": {
        "total_amount": 450000,
        "total_transactions": 9,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 450000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MIRANIA COMPLEX LLP": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NARESH HIRALAL BHANSALI": {
        "total_amount": 5500000,
        "total_transactions": 10,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 5500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NATURAL RESIDENCY LLP": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NITESH KUMAR GUPTA": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NLB SERVICES PRIVATE LIMITED": {
        "total_amount": 3200000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 3200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ORISSA METALIKS PVT LIMITED": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BIJU JANATA DAL": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PAYEL AGARWAL": {
        "total_amount": 300000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 300000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRADIP KUMAR DAS": {
        "total_amount": 150000,
        "total_transactions": 6,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 150000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PROCURE ADVISORY SERVICES PRIVATE LTD": {
        "total_amount": 80000000,
        "total_transactions": 8,
        "party_donations": {
            "BIJU JANATA DAL": 80000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "R.S.BROTHERS RETAIL INDIA PRIVATE LIMITE D": {
        "total_amount": 25000000,
        "total_transactions": 7,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAHUL AGARWAL": {
        "total_amount": 100000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAHUL BHUWANIA": {
        "total_amount": 300000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 300000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAJENDRA AGARWAL": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RASHMI CEMENT LTD": {
        "total_amount": 635000000,
        "total_transactions": 68,
        "party_donations": {
            "BIJU JANATA DAL": 450000000,
            "ALL INDIA TRINAMOOL CONGRESS": 185000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RASHMI METALIKS LTD": {
        "total_amount": 270000000,
        "total_transactions": 27,
        "party_donations": {
            "BIJU JANATA DAL": 270000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RIGHT AID CONSULTANTS PVT LTD": {
        "total_amount": 30000000,
        "total_transactions": 12,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 15000000,
            "BHARAT RASHTRA SAMITHI": 15000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ROSHNI DEALMARK PRIVATE LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BIJU JANATA DAL": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SANDEEP JHUNJHUNWALA": {
        "total_amount": 1250000,
        "total_transactions": 8,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1250000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SANDHYA  CONSTRUCTIONS & ESTATES PRIVATE  LIMITED": {
        "total_amount": 130000000,
        "total_transactions": 13,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 130000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SANJAY JHUNJHUNWALA": {
        "total_amount": 300000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 300000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SILVERTONE SECURITIES PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUMAN ESTATES PRIVATE LIMITED": {
        "total_amount": 13500000,
        "total_transactions": 18,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 8500000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SURBHI AGARWAL": {
        "total_amount": 1000000,
        "total_transactions": 10,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUSHIL KUMAR KOTHARI": {
        "total_amount": 850000,
        "total_transactions": 13,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 850000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TULIP RESIDENCY LLP": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "UTTAM KUMAR GHOSH": {
        "total_amount": 250000,
        "total_transactions": 7,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 250000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BANSAL BUSINESS PRIVATE LIMITED": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BANSHIDHAR VYAPAAR PVT LTD": {
        "total_amount": 7200000,
        "total_transactions": 9,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 7200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BENGAL COKE COMPANY LIMITED": {
        "total_amount": 113210000,
        "total_transactions": 17,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 113210000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BMW INFOTECH PRIVATE LIMITED": {
        "total_amount": 900000,
        "total_transactions": 9,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 900000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BMW INFRASTRUCTURE LLP": {
        "total_amount": 26000000,
        "total_transactions": 8,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 26000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CLIX SECURITIES PRIVATE LIMITED": {
        "total_amount": 3500000,
        "total_transactions": 8,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 3500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DALMIA BHARAT SUGAR AND INDUSTRIES LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DEEP IRON AND STEEL PVT LTD": {
        "total_amount": 3000000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GANDHI SECURITIES   INVESTMENT": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JIT INDUSTRIAL PARK LLP": {
        "total_amount": 9990000,
        "total_transactions": 27,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 9990000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRATIKSHA DOSHI": {
        "total_amount": 7500000,
        "total_transactions": 12,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 7500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAJESH MANNALAL AGRAWAL": {
        "total_amount": 130000000,
        "total_transactions": 13,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000,
            "BHARATIYA JANATA PARTY": 50000000,
            "BHARAT RASHTRA SAMITHI": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAMOLI DEALERS PVT LTD": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TORRENT POWER LTD": {
        "total_amount": 200000000,
        "total_transactions": 110,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 180000000,
            "AAM AADMI PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VAIBHAW TIE UP PRIVATE LIMITED": {
        "total_amount": 8500000,
        "total_transactions": 13,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 8500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KAMNA CREDITS AND PROMOTORS PVT LTD": {
        "total_amount": 305000000,
        "total_transactions": 53,
        "party_donations": {
            "BIJU JANATA DAL": 50000000,
            "BHARAT RASHTRA SAMITHI": 70000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 115000000,
            "BHARATIYA JANATA PARTY": 10000000,
            "ALL INDIA TRINAMOOL CONGRESS": 60000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LALITPUR POWER GENERATION COMPANY LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRARAMBH SECURITIES PVT LTDPROPRIET": {
        "total_amount": 780000000,
        "total_transactions": 78,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 380000000,
            "SHIVSENA": 20000000,
            "BHARATIYA JANATA PARTY": 330000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AUROBINDO PHARMA LTD": {
        "total_amount": 30000000,
        "total_transactions": 12,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CHENNAI GREEN WOODS PRIVATE LIMITED": {
        "total_amount": 1050000000,
        "total_transactions": 105,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 400000000,
            "BHARAT RASHTRA SAMITHI": 500000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 150000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CHOWGLE AND COMPANY PVT LTD": {
        "total_amount": 15000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 12000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KVR BASELINE RESOURCES PRIVATE LIMI": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MADHYA PRADESH WASTE MANAGEMENT PRI": {
        "total_amount": 60000000,
        "total_transactions": 6,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 60000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MODERN ROAD MAKERS PVT. LTD.": {
        "total_amount": 400000000,
        "total_transactions": 40,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 400000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "QWIKSUPPLYCHAINPRIVATELIMITED": {
        "total_amount": 4100000000,
        "total_transactions": 410,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 3750000000,
            "SHIVSENA": 250000000,
            "NATIONALIST CONGRESS PARTY MAHARASHTRA PRADESH": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SCAFFOLD PROPERTIES PVT LTD": {
        "total_amount": 70000000,
        "total_transactions": 7,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 70000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VARAS INTERNATIONAL PVT LTD": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ALOK KUMAR SOMANI": {
        "total_amount": 1500000,
        "total_transactions": 15,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AMIT SOMANI": {
        "total_amount": 1500000,
        "total_transactions": 15,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DEEPAK KHEMKA": {
        "total_amount": 300000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 300000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "FUTURE GAMING AND HOTEL SERVICES PRIVATE LIMITED": {
        "total_amount": 950000000,
        "total_transactions": 95,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 450000000,
            "DRAVIDA MUNNETRA KAZHAGAM (DMK)": 500000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "M S JUGENDRA SINGH AND COMPANY": {
        "total_amount": 2100000,
        "total_transactions": 3,
        "party_donations": {
            "ADYAKSHA SAMAJVADI PARTY": 2100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MANJU SHREE SOMANI": {
        "total_amount": 2000000,
        "total_transactions": 20,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NIDHI SOMANI": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PARIKSHIT SOMANI": {
        "total_amount": 1500000,
        "total_transactions": 15,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RISHABH KHEMKA / ISHWAR CHAND KHEMK": {
        "total_amount": 1300000,
        "total_transactions": 13,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1300000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TANUSHREE SOMANI": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "V M SALGAOCAR   BROTHER PVT LTD": {
        "total_amount": 15000000,
        "total_transactions": 15,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 9000000,
            "ALL INDIA TRINAMOOL CONGRESS": 3000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "V M SALGAOCAR CORPORATION PVT LTD": {
        "total_amount": 40500000,
        "total_transactions": 162,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 22000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 8000000,
            "NATIONALIST CONGRESS PARTY MAHARASHTRA PRADESH": 1000000,
            "GOA FORWARD PARTY": 1500000,
            "MAHARASHTRAWADI GOMNTAK PARTY": 3500000,
            "AAM AADMI PARTY": 3000000,
            "ALL INDIA TRINAMOOL CONGRESS": 1500000
        },
        "expired_bonds": 1,
        "expired_amount": 1000000
    },
    "VEDANTA LTD": {
        "total_amount": 247000000,
        "total_transactions": 40,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 210000000,
            "BHARATIYA JANATA PARTY": 35000000,
            "ALL INDIA TRINAMOOL CONGRESS": 2000000
        },
        "expired_bonds": 3,
        "expired_amount": 3000000
    },
    "APOLLO VINTRADE PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BALRAMPUR CHINI MILLS LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BKC PROPERTIES PVT LTD": {
        "total_amount": 200000000,
        "total_transactions": 20,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 200000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BLUEBERRY TRADING COMPANY PRIVATE L": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DIWAKAR NIGAM": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "AAM AADMI PARTY": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HEENA STEEL LLP": {
        "total_amount": 50000000,
        "total_transactions": 14,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 45000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HINDUSTAN TEXTILES": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KAMAL TRADING CORPORATION": {
        "total_amount": 35000000,
        "total_transactions": 35,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 20000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 15000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KAMNA COMMERCIAL PRIVATE LIMITED": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LOUISIANA INVESTMENT   FINANCE PVT": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MEGA EQUITAS PRIVATE LIMITED": {
        "total_amount": 18000000,
        "total_transactions": 9,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 18000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MEGHA ENGINEERING AND INFRASTRUCTURES LTD": {
        "total_amount": 700000000,
        "total_transactions": 70,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 600000000,
            "BIHAR PRADESH JANTA DAL(UNITED)": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MKK METAL SECTIONS PVT LTD": {
        "total_amount": 25000000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NIRMAL KUMAR BATHWAL": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BIJU JANATA DAL": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ORRISA METALIKS PVT LTD": {
        "total_amount": 80000000,
        "total_transactions": 8,
        "party_donations": {
            "BIJU JANATA DAL": 80000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PALM SHELTER ESTATE DEVELOPMENT LLP": {
        "total_amount": 32500000,
        "total_transactions": 10,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 32500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PENGUIN TRADING AND AGENCIES LTD": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BIJU JANATA DAL": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "R B DEALERS PVT LTD": {
        "total_amount": 12500000,
        "total_transactions": 17,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 7500000,
            "ALL INDIA TRINAMOOL CONGRESS": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SATISHCHANDRA SHANTILAL DOSHI HUF": {
        "total_amount": 7500000,
        "total_transactions": 12,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 7500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TARGET VINCOM PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TORRENT PHARMACEUTICALS LTD": {
        "total_amount": 425000000,
        "total_transactions": 47,
        "party_donations": {
            "ADYAKSHA SAMAJVADI PARTY": 30000000,
            "BHARATIYA JANATA PARTY": 320000000,
            "SIKKIM KRANTIKARI MORCHA": 70000000,
            "SIKKIM DEMOCRATIC FRONT": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VACMETINDIALIMITED": {
        "total_amount": 90000000,
        "total_transactions": 9,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 90000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "YOGA BUILDERS PVT LTD": {
        "total_amount": 85000000,
        "total_transactions": 13,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 55000000,
            "BHARAT RASHTRA SAMITHI": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AAKANKSHA BAHETY": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ABHISHEK TIBREWAL": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ADITYA KUMAR GARG": {
        "total_amount": 17500000,
        "total_transactions": 13,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 17500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ADWITA FINVEST PRIVATE LIMITED": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 1,
        "expired_amount": 1000
    },
    "AJAY METALLOYS PVT LTD": {
        "total_amount": 75000000,
        "total_transactions": 12,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANANT UDYOG LLP": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANKIT BAHETY": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "APCO INFRATECH PRIVATE LIMITED": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AVIGHNA MEDITECH SOLUTIONS PVT LTD": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AVIGHNA SOLUTIONS": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BALU IRON & STEEL COMPANY": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BIJAY RATAN BAHETY": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BIRLAESTATESPRIVATELIMITED": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "SHIVSENA": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BRIJESH BINANI": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CAMELIA GRIHA NIRMAN PRIVATE LIMITED": {
        "total_amount": 65000000,
        "total_transactions": 11,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 55000000,
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DEMPO IND PVT LTD NAVHIND PAPERSAND PUB": {
        "total_amount": 1500000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1000000,
            "AAM AADMI PARTY": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DEVASHRI NIRMAN LLP": {
        "total_amount": 3500000,
        "total_transactions": 8,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 3000000,
            "AAM AADMI PARTY": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DR HEALTHTECH": {
        "total_amount": 8000000,
        "total_transactions": 8,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 8000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GAURAV  BAHETY": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GOA CARBON LTD": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "GOA FORWARD PARTY": 2000000,
            "NATIONALIST CONGRESS PARTY MAHARASHTRA PRADESH": 1000000,
            "AAM AADMI PARTY": 1000000,
            "ALL INDIA TRINAMOOL CONGRESS": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HARMESH RAHUL JOSHI": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HEALTHTECH SOLUTION": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INFRASTRUCTURE LOGISTICS PVT LTD": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JYOTI LADHA": {
        "total_amount": 1500000,
        "total_transactions": 6,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KRISHNA SHEET PROCESSORS PVT LTD": {
        "total_amount": 30000000,
        "total_transactions": 12,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LULU INDIA SHOPPING MALL PRIVATE LI": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MUKUND BINANI": {
        "total_amount": 1500000,
        "total_transactions": 6,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NAVAL KISHORE AGARWAL": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NEHA BAHETY": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NETINCON MARKETING PVT LTD": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRAVEEN BAHETY": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PREETI BINANI": {
        "total_amount": 1500000,
        "total_transactions": 6,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PREM RATAN BAHETY": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAHUL JAGANNATH JOSHI": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "REENA GARG": {
        "total_amount": 17500000,
        "total_transactions": 13,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 17500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHADOWFAX TRADERS": {
        "total_amount": 15000000,
        "total_transactions": 6,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 15000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHREE RATAN BAHETY": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHRINIVAS VASUDEVA DEMPO": {
        "total_amount": 12500000,
        "total_transactions": 17,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 5000000,
            "MAHARASHTRAWADI GOMNTAK PARTY": 2000000,
            "BHARATIYA JANATA PARTY": 5000000,
            "ALL INDIA TRINAMOOL CONGRESS": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHYAM SUNDAR BAHETY": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SRINIVASH BINANI": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUKRITI GUPTA BAHETY": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SRABANI ROY": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GORUKANTI DEVENDER RAO": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GORUKANTI SURENDER RAO": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LAKSHMI MEDICALS": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAJAPUSHPA ASSET MANAGEMENT LLP": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAJAPUSHPA PROPERTIES PVT LTD": {
        "total_amount": 200000000,
        "total_transactions": 20,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 200000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAVENDER RAO GORUKANTI": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AUTHUM INVESTMENT AND INFRASTRUCTURE LTD": {
        "total_amount": 250000000,
        "total_transactions": 25,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 250000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AVEES TRADING AND FINANCE PVT LTD": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BIJU JANATA DAL": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BORAVELLI BHUPAL REDDY": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BORAVELLI RAMULAMMA": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DHEERAJ MEDICALS": {
        "total_amount": 170000000,
        "total_transactions": 17,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 150000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HETERO DRUGS LIMITED": {
        "total_amount": 300000000,
        "total_transactions": 30,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 300000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HETERO LABS LIMITED": {
        "total_amount": 250000000,
        "total_transactions": 25,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 200000000,
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HONOUR LAB LTD": {
        "total_amount": 200000000,
        "total_transactions": 20,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 200000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KOYA AND COMPANY CONSTRUCTION LTD": {
        "total_amount": 200000000,
        "total_transactions": 20,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 200000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MEGHA ENGINEERING & INFRASTRUCTURES LIMITED": {
        "total_amount": 750000000,
        "total_transactions": 75,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000,
            "BHARAT RASHTRA SAMITHI": 450000000,
            "DRAVIDA MUNNETRA KAZHAGAM (DMK)": 250000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PIRAMAL ENTERPRISES LIMITED": {
        "total_amount": 250000000,
        "total_transactions": 25,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 250000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "WELSPUN CORP LIMITED": {
        "total_amount": 130000000,
        "total_transactions": 13,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 130000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "14 REELS PLUS LLP": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AASHMAN ENERGY PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ACHINTYA SOLAR POWER PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANANTPURA WIND ENERGIES PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AXIS CLINICALS LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BRICKS INFRATECH LLP": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CHOWGULE AND COMPANY PVT LTD": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DIVYESH POWER PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ELENA RENEWABLE ENERGY PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ELITE DEVELOPERS": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "EVEY TRANS PVT LTD": {
        "total_amount": 60000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 60000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GANGDARI HYDRO POWER PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GREENKO ASTHA PROJECTS (INDIA) PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GREENKO HIM KAILASH HYDRO POWER PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GREENKO SOLAR POWER (DHARAMAVARAM) LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GREENKO SRI SAI KRISHNA HYDRO ENERGIES PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GREENKO SUMEZ HYDRO ENERGIES PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HES INFRA PVT LTD": {
        "total_amount": 220000000,
        "total_transactions": 22,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 200000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INDUS INDUSTRIAL TEC": {
        "total_amount": 1950000,
        "total_transactions": 15,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 1950000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INDUS ORGANICS": {
        "total_amount": 1950000,
        "total_transactions": 15,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 1950000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "IRA BLOSSOM FIELDS": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KONERU RAVITEJA": {
        "total_amount": 1990000,
        "total_transactions": 19,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 1990000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LOKESH KUMAR": {
        "total_amount": 1990000,
        "total_transactions": 19,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 1990000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MKJ ENTERPRISES LIMITED": {
        "total_amount": 1283500000,
        "total_transactions": 235,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 693500000,
            "ALL INDIA TRINAMOOL CONGRESS": 185000000,
            "BHARAT RASHTRA SAMITHI": 100000000,
            "JHARKHAND MUKTI MORCHA": 10000000,
            "BIJU JANATA DAL": 100000000,
            "AAM AADMI PARTY": 70000000,
            "BHARATIYA JANATA PARTY": 125000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MSN PHARMACHEM PVT LTD": {
        "total_amount": 260000000,
        "total_transactions": 26,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 200000000,
            "BHARATIYA JANATA PARTY": 60000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "P TEJAVARDHAN REDDY": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PAVANKUMAR REDDY KUNDURU": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PPR M SAND LLP": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRATYASH RENEWABLE PRIVATE LIMITED": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "R.S.BROTHERS RETIAL INDIA PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAVINDRANATHA REDDY BANDI": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAYALA SEEMA WIND ENERGY PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RIPLEY AND CO. STEVEDORING & HANDLING PVT LTD": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RT RENEWABLE ENERGY PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SAROJA RENEWABLES PRIVATE LIMITED": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SEI BASKARA POWER PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SEI ENERSTAR RENEWABLE ENRGY PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SEI MIHIR ENERGY PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHREYAS RENEWABLE ENERGY PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SRI YANTRA ASSOCIATES": {
        "total_amount": 1990000,
        "total_transactions": 19,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 1990000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SRICHAITANYA STUDENTS FACILITY MANAGEMENT PVT LTD": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TRIREME INFRASTRUCTURRE  PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VARSITY EDUCATION MANAGEMENT PVT LIMITED": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VEERA RAVEENDRA": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ZUVAN ENERGY PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GREENKO BUDHIL HYDRO POWER PVT LTD": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GREENKO RAYALA WIND POWER PVT LTD": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SANOLA WIND PROJECT PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SEI DIAMOND PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SEI VENUS PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUNBORNE ENERGY ANDHRA PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TANOT WIND POWER VENTURES PVT LTD": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 30000000,
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DR REDDYS LABORATORIES LIMITED": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "TELUGU DESAM PARTY": 30000000,
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JINDAL STAINLESS LTD": {
        "total_amount": 300000000,
        "total_transactions": 30,
        "party_donations": {
            "BIJU JANATA DAL": 300000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NATCO PHARMA LIMITED": {
        "total_amount": 120000000,
        "total_transactions": 12,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 20000000,
            "BHARAT RASHTRA SAMITHI": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TRANSWAYS EXIM PVT LTD": {
        "total_amount": 30000000,
        "total_transactions": 30,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GREENKO ENERGY PROJECTS PRIVATE LTD": {
        "total_amount": 80000000,
        "total_transactions": 8,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 80000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RITESH AGARWAL": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 5,
        "expired_amount": 5000
    },
    "PCBL LIMITED": {
        "total_amount": 450000000,
        "total_transactions": 45,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 400000000,
            "BHARAT RASHTRA SAMITHI": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DASAMI LAB PRIVATE LTD": {
        "total_amount": 25000000,
        "total_transactions": 7,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HAZELO LAB PRIVATE LTD": {
        "total_amount": 125000000,
        "total_transactions": 17,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 125000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HINDYS LAB PRIVATE LTD": {
        "total_amount": 125000000,
        "total_transactions": 17,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 125000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TRIDENTCHEMPHARLIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "TELUGU DESAM PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DANIKA TRADERS PRIVATE LTD": {
        "total_amount": 25000000,
        "total_transactions": 7,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DIVIT SECURITY": {
        "total_amount": 12000000,
        "total_transactions": 12,
        "party_donations": {
            "BIJU JANATA DAL": 5000000,
            "BHARAT RASHTRA SAMITHI": 7000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INORBIT MALLS  INDIA  PRIVATE LIMIT": {
        "total_amount": 150000000,
        "total_transactions": 15,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 100000000,
            "BHARAT RASHTRA SAMITHI": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MR. DEEPAK  KHEMKA": {
        "total_amount": 900000,
        "total_transactions": 9,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 900000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NUVOCO VISTAS CORPORATION LTD": {
        "total_amount": 70000000,
        "total_transactions": 7,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 70000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SELMAR LAB PRIVATE LTD": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "WESTWELL GASES PRIVATE LIMITED": {
        "total_amount": 285000000,
        "total_transactions": 33,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 154000000,
            "RASHTRIYA JANTA DAL": 51000000,
            "DRAVIDA MUNNETRA KAZHAGAM (DMK)": 80000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AQ SQUARE REALTORS PRIVATE LIMITED": {
        "total_amount": 80000000,
        "total_transactions": 8,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 80000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GREAT EASTERN STORES PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PROCURE ADVISORY SERVICES PRIVATE L": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BIJU JANATA DAL": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ROSHNI DEALMARK PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BIJU JANATA DAL": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANAND SAKHARAM PIMPARKAR": {
        "total_amount": 2000000,
        "total_transactions": 11,
        "party_donations": {
            "AAM AADMI PARTY": 1000000,
            "ALL INDIA TRINAMOOL CONGRESS": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASHOK PATNI": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "FERTILELAND FOODS PRIVATE LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "DRAVIDA MUNNETRA KAZHAGAM (DMK)": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MR ANUJ GOENKA": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "AAM AADMI PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MR. BAL KISHAN GOENKA": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "AAM AADMI PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MRS. SUSHILA GOENKA": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "AAM AADMI PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MS. SHIPRA GOENKA": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "AAM AADMI PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "S K SUPPLY CHAIN SOLUTIONS": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "AAM AADMI PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "S K TRADERS": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "AAM AADMI PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "S K TRADING CO.": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "AAM AADMI PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SAN BEVERAGES PVT LTD": {
        "total_amount": 3000000,
        "total_transactions": 3,
        "party_donations": {
            "AAM AADMI PARTY": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SAN LOGISTICS": {
        "total_amount": 7000000,
        "total_transactions": 7,
        "party_donations": {
            "AAM AADMI PARTY": 3000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 4000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SURESH PATNI": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUSHILA PATNI": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VINAY KUMAR BHATT": {
        "total_amount": 3000000,
        "total_transactions": 21,
        "party_donations": {
            "AAM AADMI PARTY": 1500000,
            "ALL INDIA TRINAMOOL CONGRESS": 1500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VINEET PATNI": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AAYTEE LOGISTICS PRIVATE LIMITED": {
        "total_amount": 3000000,
        "total_transactions": 3,
        "party_donations": {
            "AAM AADMI PARTY": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ABHISHEK KAUSHIK": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "AAM AADMI PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ARUNANGSHU MUKHERJEE": {
        "total_amount": 11000000,
        "total_transactions": 11,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 11000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASHISH AGARWAL": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "AAM AADMI PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASHOK KUMAR": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "AAM AADMI PARTY": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASIAN TRADING CORPORATION LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "AAM AADMI PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BENGAL VIPANAPAN PRIVATE LIMITED": {
        "total_amount": 60000000,
        "total_transactions": 6,
        "party_donations": {
            "AAM AADMI PARTY": 10000000,
            "BIJU JANATA DAL": 30000000,
            "ALL INDIA TRINAMOOL CONGRESS": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GPC FOODS PRIVATE LIMITED": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "AAM AADMI PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HERO MOTOCORP LIMITED": {
        "total_amount": 200000000,
        "total_transactions": 20,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 200000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JINDAL STEEL AND POWER LIMITED": {
        "total_amount": 1230000000,
        "total_transactions": 123,
        "party_donations": {
            "BIJU JANATA DAL": 1000000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 200000000,
            "BHARATIYA JANATA PARTY": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KANWAR                                   LAL PATNI": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MOHIT MINERALS LIMITED": {
        "total_amount": 70000000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 70000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRATIBHA AGARWAL": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "AAM AADMI PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RISHABH PATNI": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SANTOSH GOYAL": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "AAM AADMI PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUNKURU SURESH SUBUDHI  JT": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "AAM AADMI PARTY": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SWAMI FUELS PRIVATE LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIKAS PATNI": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIVEK PATNI": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ACHINTYA SOLAR POWER PRIVATE LIMITED": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AJANTA PHARMA LTD": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ARCEDGES BUILDING INDIA LLP": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "AAM AADMI PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ARROW PROJECTS PVT LTD": {
        "total_amount": 45000000,
        "total_transactions": 36,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 45000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AVON CYCLES LTD": {
        "total_amount": 14000000,
        "total_transactions": 14,
        "party_donations": {
            "AAM AADMI PARTY": 14000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BESSEGGENINFOTECHLLP": {
        "total_amount": 75000000,
        "total_transactions": 39,
        "party_donations": {
            "AAM AADMI PARTY": 10000000,
            "ALL INDIA TRINAMOOL CONGRESS": 25000000,
            "BHARAT RASHTRA SAMITHI": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "FORTUNE METALIKS LIMITED": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "AAM AADMI PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GANDHAR COALS AND MINES PVT LTD": {
        "total_amount": 60000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 60000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GANDHI BROTHERS": {
        "total_amount": 4000000,
        "total_transactions": 4,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 4000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GENUS POWER INFRASTRUCTURES LIMITED": {
        "total_amount": 305000000,
        "total_transactions": 35,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 255000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GRINIBHRIT SOLAR POWER PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INTAS PHARMACEUTICALS LIMITED": {
        "total_amount": 200000000,
        "total_transactions": 20,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 200000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "J K CEMENT LTD.": {
        "total_amount": 50000000,
        "total_transactions": 50,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MICHIGAN ENGINEERS PVT LTD": {
        "total_amount": 90000000,
        "total_transactions": 9,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 90000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MICRO LABS LTD": {
        "total_amount": 90000000,
        "total_transactions": 9,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 60000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NAVAYUGA ENGINEERING CO LTD": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NIRMA LIMITED": {
        "total_amount": 160000000,
        "total_transactions": 16,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 130000000,
            "BHARATIYA JANATA PARTY": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NSL SEZ(HYDERABAD) PRIVATE LIMITED": {
        "total_amount": 195000000,
        "total_transactions": 24,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 195000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PENNAR RENEWABLES PVT LTD( NEW ERA": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRABHAKARA RAO MANDAVA": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PREMIER PHOTOVOLTAIC MEDAK (P)LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUVARCHAS SOLAR POWER PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "THE RAMCO CEMENTS LIMITED": {
        "total_amount": 540000000,
        "total_transactions": 54,
        "party_donations": {
            "TELUGU DESAM PARTY": 50000000,
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 240000000,
            "BHARATIYA JANATA PARTY": 250000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VISHVARUPA SOLAR POWER PRIVATE LIMITED": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ZYDUS HEALTHCARE LIMITED": {
        "total_amount": 290000000,
        "total_transactions": 29,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 180000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000,
            "SIKKIM KRANTIKARI MORCHA": 80000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MARUTI SUZUKI INDIA LTD": {
        "total_amount": 200000000,
        "total_transactions": 20,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 200000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ARVIND LIMITED": {
        "total_amount": 60000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 60000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ARVINDBEAUTYBRANDSRETAILPVTLTD": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ARVINDINFRACONLLP": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "IPCA LABORATORIES LIMITED": {
        "total_amount": 135000000,
        "total_transactions": 27,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000,
            "SIKKIM KRANTIKARI MORCHA": 35000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MAATHA PROJECTS LLP": {
        "total_amount": 250000000,
        "total_transactions": 25,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 200000000,
            "TELUGU DESAM PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SOMASILA SOLAR POWER LIMITED": {
        "total_amount": 70000000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000,
            "TELUGU DESAM PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SRI SIDDHARTH INFRATECH AND SERVICES I P": {
        "total_amount": 601000000,
        "total_transactions": 61,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 500000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 100000000,
            "TELUGU DESAM PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "THE ANUP ENGINEERING": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ARAVALI TECHNICAL SERVICES PVT LTD": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ARIZONAGLOBALSERVICESPVTLTDBR": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GLENMARK PHARMACEUTICALS LTD": {
        "total_amount": 97500000,
        "total_transactions": 21,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 97500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MANKIND PHARMA LIMITED": {
        "total_amount": 240000000,
        "total_transactions": 24,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 240000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MNMEDIAVENTURESPVTL108": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ABHINAV JAIN": {
        "total_amount": 200000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ALEMBICPHARMACEUTICALSLINCLRTGS": {
        "total_amount": 102000000,
        "total_transactions": 21,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 102000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ALKEM LABORATORIES LIMITED": {
        "total_amount": 150000000,
        "total_transactions": 15,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 150000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AMIT GUPTA": {
        "total_amount": 200000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ARVIND  LIMITED": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "FIOTEX COTSPIN PRIVATE LIMITED": {
        "total_amount": 3800000,
        "total_transactions": 11,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 3800000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HARSHIT CHHABRA": {
        "total_amount": 200000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KULWANT SINGH": {
        "total_amount": 3000000,
        "total_transactions": 3,
        "party_donations": {
            "AAM AADMI PARTY": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MANJIT KAUR": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "AAM AADMI PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NAHAR BUILDERS AND DEVELOPERS LTD": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PANACEA BIOTEC PHARMA LTD PHARMACEU": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PARAMJIT SINGH S O JAGJIT SINGH": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "AAM AADMI PARTY": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PIRAMAL PHARMA LIMITED": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RMC SWITCHGEARS LTD": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SAURABH JAIN": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "WELSPUN INDIA LIMITED": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANGEL FIBERS LIMITED": {
        "total_amount": 2900000,
        "total_transactions": 11,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 2900000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASHOK CHOUDHARY": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BEST AGROLIFE LIMITED": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BIRD WORLDWIDE FLIGHT SERVICES INDI": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "AAM AADMI PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DHRUV COTTON PROCESSING PVT LTD": {
        "total_amount": 1915000,
        "total_transactions": 16,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1915000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DLF GARDEN CITY INDORE PVT LTD": {
        "total_amount": 150000000,
        "total_transactions": 15,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 150000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "J S K HOTELS P LTD": {
        "total_amount": 7500000,
        "total_transactions": 12,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 7500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JYOTSNA AGGARWAL": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KHUSHBU  AGGARWAL": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "M M YARNS PVT LTD": {
        "total_amount": 3830000,
        "total_transactions": 14,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 3830000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PAWAN AGARWAL": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 1,
        "expired_amount": 1000
    },
    "PREM AGGARWAL": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PREM AGGARWAL AND SONS HUF": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAGHAV COTSPIN PRIVATE LIMITED": {
        "total_amount": 1504000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1504000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAMKRISHNA COTSPIN PVT LTD": {
        "total_amount": 1915000,
        "total_transactions": 16,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1915000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "S G  AGARWAL & CO": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SANDEEP AGGARWAL": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SANDEEP AGGARWAL AND SONS HUF": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SANVI SPINNING MILLS PVT LTD": {
        "total_amount": 2833000,
        "total_transactions": 16,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 2833000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SERVEALL LAND DEVELOPERS PVT LTD": {
        "total_amount": 22500000,
        "total_transactions": 9,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 22500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHINE COTSPIN PVT LTD": {
        "total_amount": 1368000,
        "total_transactions": 18,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1368000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SNB MINERALS PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUN OILNATURAL GAS DIV SUN PETRO P.": {
        "total_amount": 80000000,
        "total_transactions": 8,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 40000000,
            "BHARATIYA JANATA PARTY": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUSTAINABLE SPINNING AND COMMODITIES PVT  LTD": {
        "total_amount": 1450000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1450000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TRIBHUVAN SPINTEX PRIVATE LIMITED": {
        "total_amount": 2484000,
        "total_transactions": 18,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 2484000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "UNITED PHOSPHORUS INDIA LLP": {
        "total_amount": 500000000,
        "total_transactions": 50,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 500000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "USHA AGGARWAL": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "USV PRIVATE LTD ( FORMERLY USV LTD)": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VEDANTA ELECTRICALS PRIVATE LIMITED": {
        "total_amount": 17500000,
        "total_transactions": 13,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 17500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIPIN AGGARWAL": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIPIN AGGARWAL AND SONS HUF": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DCM SHRIRAM LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "EVERSHINE INTERIORS CHENNAI PVT LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INORBIT MALLS INDIA PRIVATE LIMITED": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PATEL ENGINEERING LTD.": {
        "total_amount": 60000000,
        "total_transactions": 60,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 60000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ABNLINVESTMENTLIMITED": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BIRLACARBONINDIAPRIVATELIMITED": {
        "total_amount": 1050000000,
        "total_transactions": 105,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1050000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAJDHANI DEALERS PRIVATE LIMITED": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VINEET NANDA": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "AAM AADMI PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AMARAVATI TEKSYSTEMS PRIVATE LIMITE": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "TELUGU DESAM PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DINESH KUMAR AGARWALLA": {
        "total_amount": 300000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 300000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TEKREANT INDIA PRIVATE LIMITED": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "TELUGU DESAM PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANAND AGRAWAL": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 7,
        "expired_amount": 25000
    },
    "KAMAL MANOHAR": {
        "total_amount": 3000000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHREE CHAND SARAOGI": {
        "total_amount": 15000000,
        "total_transactions": 24,
        "party_donations": {
            "JHARKHAND MUKTI MORCHA": 7500000,
            "ALL INDIA TRINAMOOL CONGRESS": 7500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SLICK SOFTWARE SOLUTIONS PRIVATE LI": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "TELUGU DESAM PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SREE RAYALASEEMA HI STRENGTH HYPO LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "TELUGU DESAM PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DAMINI NATH": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 1,
        "expired_amount": 1000
    },
    "MAHESH NARAYAN KHADE": {
        "total_amount": 5000000,
        "total_transactions": 14,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MR. KAUKUNTLA  VENU GOPAL": {
        "total_amount": 1000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MANU VYAPAR (P) LTD.": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 10000000,
            "BIJU JANATA DAL": 20000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RANJIT BUILDCON LIMITED": {
        "total_amount": 90000000,
        "total_transactions": 9,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 70000000,
            "SHIVSENA": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RANJIT PROJECTS PRIVATE LIMITED": {
        "total_amount": 25000000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 15000000,
            "SHIVSENA": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RANJIT TOLL ROAD PRIVATE LIMITED": {
        "total_amount": 35000000,
        "total_transactions": 8,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 15000000,
            "SHIVSENA": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "B G SHIRKE CONSTRUCTION TECHNOLOGY PVT L TD": {
        "total_amount": 1170000000,
        "total_transactions": 117,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 300000000,
            "SHIVSENA": 850000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BUILDOX DEVELOPERS LLP": {
        "total_amount": 9500000,
        "total_transactions": 14,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 3500000,
            "BHARATIYA JANATA PARTY": 6000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LUPIN LIMITED": {
        "total_amount": 180000000,
        "total_transactions": 18,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 180000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAKESH PRAVINCHANDRA SHAH": {
        "total_amount": 18600000,
        "total_transactions": 24,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 18600000
        },
        "expired_bonds": 1,
        "expired_amount": 100000
    },
    "BIOXGREEN TECHNOLOGY PRIVATE LIMITE": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "EFICENS SOFTWARE SERVICES PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "TELUGU DESAM PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MAHINDRA & MAHINDRA LTD": {
        "total_amount": 250000000,
        "total_transactions": 25,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 250000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MOHIT MINERALS  LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MR KONARK RAJENDRA SHAH": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRAGATI ENTERPRISES": {
        "total_amount": 35000000,
        "total_transactions": 8,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 35000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RITHWIK PROJECTS  PRIVATE LIMITED": {
        "total_amount": 450000000,
        "total_transactions": 45,
        "party_donations": {
            "TELUGU DESAM PARTY": 50000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 300000000,
            "JANATA DAL ( SECULAR )": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SOPANRAO BALKRISHNA DHASAL AGRO PRODUCTS  LIMITED": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BINOD KUMAR MAROTI": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 2000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KIRITI VENTURES PRIVATE LIMITED": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "TELUGU DESAM PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KONARK RAJENDRA SHAH": {
        "total_amount": 45000000,
        "total_transactions": 9,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 45000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MARAL OVERSEAS LTD.": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SMRITI  AGRAWAL": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TARLA RAJENDRA SHAH": {
        "total_amount": 15000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 15000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CAPACITE INFRAPROJECTS LTD": {
        "total_amount": 70000000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 70000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DIPAN  P  SHAH": {
        "total_amount": 8500000,
        "total_transactions": 13,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 8500000
        },
        "expired_bonds": 3,
        "expired_amount": 300000
    },
    "FUTURISTIC HANDLING SERVICES PVT LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INDER                                    THAKURDAS JAISINGHANI": {
        "total_amount": 140000000,
        "total_transactions": 14,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 140000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JAINENDRA  P  SHAH": {
        "total_amount": 6300000,
        "total_transactions": 9,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 6300000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LAXMI CIVIL ENGINEERING SERVICES PR": {
        "total_amount": 400000000,
        "total_transactions": 40,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 400000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MAHABIR BANKA": {
        "total_amount": 50000000,
        "total_transactions": 14,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 35000000,
            "RASHTRIYA JANTA DAL": 15000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAUNAK GUPTA": {
        "total_amount": 50000000,
        "total_transactions": 14,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 15000000,
            "RASHTRIYA JANTA DAL": 35000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SALASAR FINANCIAL ADVISORY SERVICES": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SPECO INFRASTRUCTURES": {
        "total_amount": 25000000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "UNIPRO TECHNO INFRASTRUCTURE PVT LTD": {
        "total_amount": 80000000,
        "total_transactions": 8,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 80000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIKAS PARASRAMPURIA": {
        "total_amount": 50000000,
        "total_transactions": 14,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 35000000,
            "RASHTRIYA JANTA DAL": 15000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "WPIL LIMITED": {
        "total_amount": 220000000,
        "total_transactions": 22,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 150000000,
            "ALL INDIA TRINAMOOL CONGRESS": 70000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANTIQUE INDIA PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KALPATARU PROJECTS INTERNATIONAL LIMITED": {
        "total_amount": 255000000,
        "total_transactions": 30,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 255000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ARS COATED STEEL": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASIAN AGRI GENETICS LIMITED": {
        "total_amount": 45000000,
        "total_transactions": 9,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 45000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BANSAL UDYOG PRIVATE": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BISHOPS WEED FOOD CRAFTS PRIVATE LI": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CANDY SPIRITS PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CHAYA REAL ESTATE PVT LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CHENNAMANAGATHIHALLI SOLAR POWER PROJECT": {
        "total_amount": 150000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 150000
        },
        "expired_bonds": 6,
        "expired_amount": 600000
    },
    "CHIKKAHALLI SOLAR POWER PROJECT LLP": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "COMFORT TRIMS PRIVATE LIMITED DIVIS": {
        "total_amount": 80000000,
        "total_transactions": 8,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 80000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CURATED LIVING SOLUTIONS PRIVATE LI": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DINESH KUMAR LAKHANPAL": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DIVYASREE HOLDINGS PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DIVYASREE NSL INFRASTRUCTURE PRIVATE LIM ITED": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DIVYASREE SOFTTECH REALTORS PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GOODLUCK  INDIA LIMITED": {
        "total_amount": 100000000,
        "total_transactions": 19,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 25000000,
            "BHARATIYA JANATA PARTY": 75000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GORJA STEEL PROCESSORS": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GREENKO MP01 IREP PRIVATE LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GUPTA VARUN": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HANSVAHINI AUTO INTERIOR PVT LTD": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HIMADRI KHAN": {
        "total_amount": 13000000,
        "total_transactions": 13,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 13000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HIREHALLI SOLAR POWER PROJECT LLP": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HUNSANKODILLI SOLAR POWER PROJECT LLP": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ILABS HYD TECHNOLOGY CENTRE PVT LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "JANATA DAL ( SECULAR )": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KCR ENTERPRISE LLP": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "JANATA DAL ( SECULAR )": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KIRAN MAZUMDAR SHAW": {
        "total_amount": 60000000,
        "total_transactions": 24,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 40000000,
            "JANATA DAL ( SECULAR )": 10000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "M/S KAMAL ISPAT": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MADAMAGERI SOLAR POWER PROJECT LLP": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MARDI GRAS LIQUOR DIV OF MARDI GRAS": {
        "total_amount": 23000000,
        "total_transactions": 23,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 23000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MIDAS PROJECTS PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MTC ISPAT PVT LTD": {
        "total_amount": 25000000,
        "total_transactions": 7,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NSL RENEWABLE POWER PRIVATE LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRABHAKAR RAO ASHA PRIYA PROPERTIES": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRABHAT HOMES PRIVATE LIMITED": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RSLH AUTO SEAT TRIMS PVT LTD": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TOPNOTCH PROJECTS PRIVATE LIMITED": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIJAY KUMAR GOYAL": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AARISH SOLAR POWER PRIVATE LIMITED": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AASHMAN ENERGY PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANIMALA WIND POWER PRIVATE LIMITED": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AUGMONT ENTERPRISES PRIVATE LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AXIS WIND FARMS (MPR DAM) PRIVATE L": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BAPUNA ALCOBREW PRIVATE LIMITED": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BRINDABAN NASKAR": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 5,
        "expired_amount": 500000
    },
    "DIVYESH POWER PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ELENA RENEWABLE ENERGY PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "FORTUNE ESTATE DEVELOPERS PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GREENKO ANANTAPUR WIND POWER PRIVATE LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GREENKO URAVAKONDA WIND POWER PRIVA": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HERALD BEVERAGES PRIVATE LIMITED": {
        "total_amount": 115000000,
        "total_transactions": 16,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 55000000,
            "RASHTRIYA JANTA DAL": 20000000,
            "DRAVIDA MUNNETRA KAZHAGAM (DMK)": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JWIL INFRA LTD. (FORM. JITF WATER": {
        "total_amount": 105000000,
        "total_transactions": 15,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 104000000,
            "ALL INDIA TRINAMOOL CONGRESS": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "K D LIQUOR AND FERTILIZER PVT LTD": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LCCPROJECTSPRIVATELIMITED": {
        "total_amount": 315000000,
        "total_transactions": 36,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 315000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRESTIGE ESTATES PROJECTS LTD PREST": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRESTIGE GARDEN ESTATES PRIVATE LIM": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000,
            "BHARAT RASHTRA SAMITHI": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRESTIGE PROJECTS PVT LTD": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000,
            "BHARAT RASHTRA SAMITHI": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRESTIGE PROPERTY MANAGEMENT AND SE": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "R R KABEL LIMITED": {
        "total_amount": 200000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SATEC ENVIR ENGINEERING (I) PVT LTD": {
        "total_amount": 120000000,
        "total_transactions": 21,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 120000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SEI ARUSHI PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHREYAS RENEWABLE ENERGY PRIVATE LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SKEIRON RENEWABLE ENERGY AMIDYALA PRIVATE LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SOHINI DEVELOPERS LLP": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TADAS WIND ENERGY PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VAMSIRAM BUILDERS LLP": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VAMSIRAM DEVELOPERS LLP": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VAMSIRAMS JYOTHI LORVEN": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VILLAGE DE NANDI PVT LTD RERA DESIG": {
        "total_amount": 50000000,
        "total_transactions": 50,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIPIN GUPTA": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ZUVAN ENERGY PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AKSENTT TECH SERVICES LIMITED (UNITY TEL ECOM INFRASTRUCTURE)": {
        "total_amount": 150000000,
        "total_transactions": 15,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 150000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASKUS LOGISTICS PRIV": {
        "total_amount": 60000000,
        "total_transactions": 6,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 60000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BALAJI  REAL ESTATE VENTURES PVT LT": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BHAGYANAGAR INFRA PROJECTS": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BHAGYASREE REALTORS PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "C R ASSOCIATES": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "TELUGU DESAM PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CASTLE LIQUORS PRIVATE LIMITED": {
        "total_amount": 75000000,
        "total_transactions": 75,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 68000000,
            "RASHTRIYA JANTA DAL": 7000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CHANDAN AGARWAL": {
        "total_amount": 150000,
        "total_transactions": 6,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 150000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "D S ENGINEERING WORKS LLP": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BIJU JANATA DAL": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DILIP RAMANLAL THACKER": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DINESHCHANDRA R AGRAWAL INFRACON PVT LTD": {
        "total_amount": 185000000,
        "total_transactions": 23,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 150000000,
            "SHIVSENA": 30000000,
            "JHARKHAND MUKTI MORCHA": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HONOUR LAB LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MADHUMITA SAH": {
        "total_amount": 200000,
        "total_transactions": 2,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MR SACHIN BAKLIWAL": {
        "total_amount": 3000000,
        "total_transactions": 3,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "N A R INFRA PRIVATE LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "TELUGU DESAM PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NARA CONSTRUCTIONS": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "JANATA DAL ( SECULAR )": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NIMBHA BIOTECH PRIVATE LIMITED": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "JANATA DAL ( SECULAR )": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NSL SEZ HYDERABAD PRIVATE LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAMGAD MINERALS AND MINING LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RUMA GHATAK": {
        "total_amount": 100000,
        "total_transactions": 1,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SANDEEP AUTO LINES": {
        "total_amount": 100000000,
        "total_transactions": 19,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 70000000,
            "RASHTRIYA JANTA DAL": 20000000,
            "DRAVIDA MUNNETRA KAZHAGAM (DMK)": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SANJIB CHAKRABORTY": {
        "total_amount": 100000,
        "total_transactions": 1,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SIGMA ADVANCED SYSTEMS PRIVATE LIMI": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "JANATA DAL ( SECULAR )": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUDHAKAR KANCHARLA": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "TELUGU DESAM PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TEJAS  P  SHAH": {
        "total_amount": 8700000,
        "total_transactions": 15,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 8700000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUPER CYBERTECH PARK PRIVATE LIMITE": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "IRB MP EXPRESSWAY PRIVATE LIMITED": {
        "total_amount": 250000000,
        "total_transactions": 25,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 250000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VENKAT PRANEETH DEVELOPRS (P) LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DIVI S LABORATORIES LIMITED": {
        "total_amount": 550000000,
        "total_transactions": 55,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 200000000,
            "BHARATIYA JANATA PARTY": 300000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KITEX CHILDRENSWEAR LTD": {
        "total_amount": 90000000,
        "total_transactions": 9,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 90000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KITEX GARMENTS LIMITED": {
        "total_amount": 160000000,
        "total_transactions": 16,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 160000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MANOTOSH DAS": {
        "total_amount": 12000000,
        "total_transactions": 12,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 12000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAMESH AGARWAL C S BOTTLING PL": {
        "total_amount": 15000000,
        "total_transactions": 15,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 15000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AALAYA CONSTRUCTIONS": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BHASWINI DEVELOPERS": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MY HOME INFRASTRUCTURES  PRIVATE LI": {
        "total_amount": 150000000,
        "total_transactions": 15,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 150000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SRI DEVELOPERS": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SRI KARTHIKEYA DEVELOPERS": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VASUDHA DEVELOPERS": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AQUA SPACE DEVELOPERS PRIVATE LIMIT": {
        "total_amount": 150000000,
        "total_transactions": 15,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 150000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASKUS LOGISTICS PRIVATE LIMITED": {
        "total_amount": 90000000,
        "total_transactions": 9,
        "party_donations": {
            "RASHTRIYA JANTA DAL": 90000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CHANDAKA SANYASI RAO": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CROCHET TRADE AND INVESTMENT PVT LT": {
        "total_amount": 15000000,
        "total_transactions": 6,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 15000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DINESH PROJECTS": {
        "total_amount": 5500000,
        "total_transactions": 10,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 5500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ELLISBRIDGE ESTATES PVT LTD": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "FOR M/S SRI NIDHI CONSTRUCTIONS": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "G CHANDRASHEKHAR": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GAJA ENGINEERING PVT LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MB POWER (MADHYA PRADESH) LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PUNIT DEVENDRABHAI BHANDERI": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 1,
        "expired_amount": 1000
    },
    "SAGAR CEMENTS LIMITED": {
        "total_amount": 25000000,
        "total_transactions": 25,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 5000000,
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 5000000,
            "TELUGU DESAM PARTY": 5000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 5000000,
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SIDDHARTH DEVELOPERS": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SWARNARETH MINERAL INDUSTRIES": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VERTEX VEGA DEVELOPERS LLP": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AMAR KRISHNA SAJJA": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ARAVIND S": {
        "total_amount": 1000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CREATIVE LLP": {
        "total_amount": 9600000,
        "total_transactions": 24,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 9600000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KAUSTUBH VERMA": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KNR CONSTRUCTIONS LTD": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LAXMI INDUSTRIAL BOTTLING PLANT": {
        "total_amount": 36500000,
        "total_transactions": 23,
        "party_donations": {
            "RASHTRIYA JANTA DAL": 24400000,
            "ALL INDIA TRINAMOOL CONGRESS": 12100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LPF SYSTEMS PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MUPPANA VENKATA RAO": {
        "total_amount": 9000000,
        "total_transactions": 18,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 9000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NVNR POWER   INFRA PRIVATE LIMITED": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PARESH CHAMPAKLAL SHAH": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BIJU JANATA DAL": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRUDHVI CONSTRUCTIONS PRIVATE LIMIT": {
        "total_amount": 25000000,
        "total_transactions": 16,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "R   R INFRATECH  INDIA  PRIVATE LIM": {
        "total_amount": 25000000,
        "total_transactions": 16,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "REPALLY ASHOK": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SAGI VENKATA RAMAKRISHNA RAJU": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SILVERTONE SECURITIES PRIVATE LIMIT": {
        "total_amount": 15000000,
        "total_transactions": 6,
        "party_donations": {
            "BIJU JANATA DAL": 12000000,
            "BHARAT RASHTRA SAMITHI": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TELLAPUR TECHNOCITY PRIVATE LIMI": {
        "total_amount": 200000000,
        "total_transactions": 20,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 200000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "V BALAVEERIAH SONS": {
        "total_amount": 2500000,
        "total_transactions": 25,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIDITVA CONSTRUCTIONS": {
        "total_amount": 4800000,
        "total_transactions": 12,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 4800000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIPUL CHAMPAKLAL SHAH": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BIJU JANATA DAL": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASHOKA  MUDHOL NIPANI ROADS LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BSCPL INFRASTRUCTURE LIMITED": {
        "total_amount": 15000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 15000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GURRAM MOUNIKA": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GURRAM RAVI": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INDIA EXPOSITION MART LTD": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MANITHEJ ENTERPRISES": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PASURA AGRI SCIENCES LLP": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PASURA CROP CARE PVT LTD": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRIMUSGLOBALTECHNOLOGIESPVTLTD": {
        "total_amount": 7000000,
        "total_transactions": 16,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 2500000,
            "TELUGU DESAM PARTY": 4500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RPSG VENTURES LIMITED": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "THE PUNJAB BUSINESS SUPPLY COMPANY": {
        "total_amount": 78000000,
        "total_transactions": 15,
        "party_donations": {
            "BIJU JANATA DAL": 78000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIVA HIGHWAYS  LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ALA RAMANJANEYULU": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AMD ENGINEERING CONSULTANTS": {
        "total_amount": 7500000,
        "total_transactions": 12,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 7500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BIOLOGICAL E LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BOSE CONSTRUCTIONS": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BUTTA HOSPITALITIES PVT LTD": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BYRAPANENI SHIVARJUN RAO": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "TELUGU DESAM PARTY": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CYBER HOMES": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DOYEN ENGINEERING SERVICES PRIVATE": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "EAGLE INFRA INDIA LTD": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "EVEREST ENTERPRISE": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GANGADASU BASIVI REDDY": {
        "total_amount": 800000,
        "total_transactions": 8,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 800000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GANGES JUTE PRIVATE LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GOWREDDY HARIPRASAD REDDY": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HINDYS LAB PVT. LTD. (PREVIOUSLY HIND LI FE SCIENCES PVT LTD)": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ICONICA PROJECTS": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ISTAMSETTY SONY": {
        "total_amount": 1200000,
        "total_transactions": 3,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 1200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KARTHIKEYA CONSTRUCTIONS": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KARTIKEYA INFRA": {
        "total_amount": 900000,
        "total_transactions": 9,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 900000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KMK DEVELOPERS PVT LTD ASHISH BHAS": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MOUNT EVEREST BREWERIES LIMITED": {
        "total_amount": 19900000,
        "total_transactions": 19,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 19900000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NIRANJAN LAL AND SONS HUF": {
        "total_amount": 7500000,
        "total_transactions": 12,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 7500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NIRAV MAROTI": {
        "total_amount": 3500000,
        "total_transactions": 8,
        "party_donations": {
            "AAM AADMI PARTY": 1500000,
            "ALL INDIA TRINAMOOL CONGRESS": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NVSUBBA RAO": {
        "total_amount": 15000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 15000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRADEEP AGGARWAL": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BIJU JANATA DAL": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PREMIER PLASTIC INDUSTRIES": {
        "total_amount": 900000,
        "total_transactions": 9,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 900000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "R K V FABTECH INDIA PRIVATE LIMITED": {
        "total_amount": 4000000,
        "total_transactions": 4,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 4000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "R N CONSTRUCTIONS": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "R V SUBRAHAMANYAM ISTAMSETTY": {
        "total_amount": 1300000,
        "total_transactions": 4,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 1300000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAMESH KRISHNA ENGINEERS PRIVATE LIMITED": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SHRI SHAMLAJI SALES PRIVATE LIMITED": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BIJU JANATA DAL": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SIAN INFRA AND REALCON LLP": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SLRV HOMES LLP": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "TELUGU DESAM PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SOM DISTILERIES PRIVATE LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SR DEVELOPERS": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SRI SAI BIO ORGANICS( OPR BY R V SUBRAHM ANYAM I)": {
        "total_amount": 35500000,
        "total_transactions": 13,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 35500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SRI SIDDARTHA CONSTRUCTIONS": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SRI VIGNEWARA CONSTRUCTIONS": {
        "total_amount": 900000,
        "total_transactions": 9,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 900000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SRIVAY INDUSTRIES LIMITED": {
        "total_amount": 14900000,
        "total_transactions": 14,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 14900000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SRIVILAS HYDROTECH PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUNIL ENGINEERING AND SYSTEMS": {
        "total_amount": 15000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 15000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "THE ANGUS COMPANY LIMITED": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "THE GANGES MANUFACTURING CO LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TSHARKS INFRA DEVELOPERS PRIVATE LI": {
        "total_amount": 35000000,
        "total_transactions": 8,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 35000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TSHARKS OVERSEAS EDUCATION CONSULTA": {
        "total_amount": 40000000,
        "total_transactions": 13,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VASAVI  AVENUES LLP": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VENKATESH NARAYAN REDDY": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIKAS AGGARWAL": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BIJU JANATA DAL": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANKUR SINGHAL S O SH  ANIL SIN": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 1,
        "expired_amount": 1000
    },
    "IDEAL ROAD BUILDERS  PVT.LTD.": {
        "total_amount": 60000000,
        "total_transactions": 6,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 60000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INTERGLOBE AVIATION LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SIDDHI TRADING": {
        "total_amount": 220000000,
        "total_transactions": 22,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 220000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BASANT GAJANAND LAKHOTIYA": {
        "total_amount": 2000000,
        "total_transactions": 11,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DHARMENDRA VORA": {
        "total_amount": 1500000,
        "total_transactions": 6,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "FUTURE GAMING AND HOTEL SERVICES PVT LTD": {
        "total_amount": 650000000,
        "total_transactions": 65,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 620000000,
            "SIKKIM KRANTIKARI MORCHA": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GOURAV RAJESH MUNDHRA": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HEMANT LAKHOTIA": {
        "total_amount": 700000,
        "total_transactions": 7,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 700000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HITESH D SHAH HUF": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NIKHIL SUNIL MUNDHRA": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RACHIT KAILASH MUNDHRA": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SRI KUMARASWAMY MINERAL EXPORTS PR": {
        "total_amount": 83300000,
        "total_transactions": 14,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 83300000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TRIDENT LIMITED {FORMERLY ABHISHEK INDUS TRIES LIMITED}": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VEERABHADRAPPA SANGAPPA AND CO": {
        "total_amount": 55000000,
        "total_transactions": 10,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 55000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASHISH KHANDELWAL": {
        "total_amount": 600000,
        "total_transactions": 6,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 600000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "THE SANDUR MANGANESE &AMP;AMP; IRON ORES LI": {
        "total_amount": 56000000,
        "total_transactions": 11,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 56000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TRIDENT LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIVEK BANSAL": {
        "total_amount": 700000,
        "total_transactions": 7,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 700000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "WESTERN UP POWER TRANSMISSION COMPANY LI MITED": {
        "total_amount": 2200000000,
        "total_transactions": 220,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1100000000,
            "BHARATIYA JANATA PARTY": 800000000,
            "JANASENA PARTY": 100000000,
            "TELUGU DESAM PARTY": 200000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ABHRAJIT MITRA": {
        "total_amount": 42500000,
        "total_transactions": 11,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 32000000,
            "ALL INDIA TRINAMOOL CONGRESS": 10500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AJAY SARAF": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GVPR ENGINEERS LTD": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HIMANGA MERCANTILES PVT LTD": {
        "total_amount": 1500000,
        "total_transactions": 6,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 1500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MR. SAMEER  BHATIA": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 1,
        "expired_amount": 1000
    },
    "RAUNAK PROPERTIES PVT. LTD": {
        "total_amount": 3000000,
        "total_transactions": 3,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 3000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "B.DAS AND ASSOCIATES PVT. LTD.": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BAIN GLOBAL RESOURCES LLP": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INDURU SUDHAKARA  REDDY": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "J B ENTERPRISE": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MICRO LABS LIMITED": {
        "total_amount": 70000000,
        "total_transactions": 7,
        "party_donations": {
            "SIKKIM KRANTIKARI MORCHA": 70000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "R K INFRACORP PRIVATE LIMITED": {
        "total_amount": 8800000,
        "total_transactions": 16,
        "party_donations": {
            "TELUGU DESAM PARTY": 8800000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "STOCKPATHADVISORSLLP": {
        "total_amount": 52000000,
        "total_transactions": 16,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 52000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASHISH JAIN": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASHOKA BAGEWADI SAUNDATTI ROAD LIMITED": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASSOCIATED ALCOHOLS  BREWERIES LIMI": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DEEPAK                                   MAJJI VENKATA": {
        "total_amount": 2000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 2000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INTERNATIONAL TRADING CORPORATION": {
        "total_amount": 15000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 15000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KAUSHALENDER AGGARWAL": {
        "total_amount": 1500000,
        "total_transactions": 6,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 1500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "L7 HITECH PRIVATE LIMITED": {
        "total_amount": 220000000,
        "total_transactions": 22,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 220000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NANDI ENTERPRISES": {
        "total_amount": 61800000,
        "total_transactions": 24,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 61800000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NORTHERN SPIRITS LTD": {
        "total_amount": 12000000,
        "total_transactions": 3,
        "party_donations": {
            "RASHTRIYA JANTA DAL": 12000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAHUL CHOUDHARY": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "RASHTRIYA JANTA DAL": 400000,
            "ALL INDIA TRINAMOOL CONGRESS": 100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SOM DISTILLERIES BREWERIES LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SOM DISTILLERIES PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VARDHMAN TEXTILES LIMITED": {
        "total_amount": 40000000,
        "total_transactions": 13,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AKSHAT GREENTECH PRIVATE LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASHOKA HUNGUND TALIKOT ROAD LTD": {
        "total_amount": 45000000,
        "total_transactions": 9,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 45000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BHACHIBEN KHAMUBHAI MANVAR": {
        "total_amount": 10768000,
        "total_transactions": 22,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000,
            "SHIVSENA": 768000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DEVAL KHAMUBHAI MANVAR": {
        "total_amount": 11268000,
        "total_transactions": 18,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000,
            "SHIVSENA": 1268000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "H S ARAVINDA": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HARIJAN HIRIBAI": {
        "total_amount": 10768000,
        "total_transactions": 22,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000,
            "SHIVSENA": 768000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MANVAR DEVABHAI": {
        "total_amount": 11436000,
        "total_transactions": 15,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000,
            "SHIVSENA": 1436000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MANVAR SAVABHAI": {
        "total_amount": 55006000,
        "total_transactions": 16,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000,
            "SHIVSENA": 5006000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MR. ISHANT  GUPTA": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MR. NISHANT K YADAV": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NUVOCO VISTAS CORP. LTD": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRASHANT KUMAR JAISWAL": {
        "total_amount": 43000000,
        "total_transactions": 25,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 43000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PUJA COAL PRIVATE LIMITED": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "JHARKHAND MUKTI MORCHA": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RATHOD LAKHIBEN": {
        "total_amount": 10768000,
        "total_transactions": 22,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000,
            "SHIVSENA": 768000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SENGUPTA AND SENGUPTA PVT LTD": {
        "total_amount": 15000000,
        "total_transactions": 6,
        "party_donations": {
            "RASHTRIYA JANTA DAL": 10000000,
            "ALL INDIA TRINAMOOL CONGRESS": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SI AIR SPRINGS PRIVATE LTD": {
        "total_amount": 15000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 15000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "THE ASSOCIATED AUTO PARTS PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TVS MOBILITY PRIVATE LIMITED": {
        "total_amount": 160000000,
        "total_transactions": 16,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 160000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIJAYKUMARMISHRACONSTRUCTIONPVT": {
        "total_amount": 60000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ANITA HEMANT SHAH": {
        "total_amount": 82000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 82000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "APARNA FARMS AND ESTATES LLP": {
        "total_amount": 300000000,
        "total_transactions": 30,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 150000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 150000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "APCO INFRATECH PRIVATE LTD": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BLUESTONE COMMODITIES LLP": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DASAMI LAB PRIVATE LIMITED (FORMERLY HEL IUS LAB PVT LTD)": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HETERO BIOPHARMA LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HORIZON MEDICAL SUPPLIES": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KISHAN F.L. BOND HOUSE": {
        "total_amount": 25000000,
        "total_transactions": 16,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "NISHANT SARAFF": {
        "total_amount": 250000,
        "total_transactions": 7,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 250000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SANDEEP KUMAR SULTANIA (JT1)": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SELMAR LAB  PRIVATE LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SOURABH                                  KUMAR ROY": {
        "total_amount": 2688000,
        "total_transactions": 24,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 2688000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUNDRAM INDUSTRIES PVT LTD": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "THRIVENI SAINIK MINING PRIVATE LIMI": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "JHARKHAND MUKTI MORCHA": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "UTKARSH JAIN": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VISHAL KOTHARI": {
        "total_amount": 100000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VS TOWERS   CONTRACTORS PRIVATE LIM": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "YOGESH MANNALAL AGRAWAL": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "YUVAN TRADING   CONSULTANCY LLP": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "SHIVSENA": 30000000,
            "BHARAT RASHTRA SAMITHI": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AJIT KUMAR JAIN": {
        "total_amount": 200000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 200000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AYUSH JAIN": {
        "total_amount": 300000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 300000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BASUDEV AGARWAL": {
        "total_amount": 150000,
        "total_transactions": 6,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 150000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DYNAMIC CS BOTTLING PVT LTD": {
        "total_amount": 5000000,
        "total_transactions": 14,
        "party_donations": {
            "RASHTRIYA JANTA DAL": 2200000,
            "ALL INDIA TRINAMOOL CONGRESS": 2800000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HARSHIT KOTHARI": {
        "total_amount": 100000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 100000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "J K CEMENT LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MR GIRIDARAN MANIVANNAN": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 3,
        "expired_amount": 3000
    },
    "MRS LILA DEVI SULTANIA": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PARIBARTAN ELECTORAL TRUST": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SANJAY AGARWAL": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TEGA INDUSTRIES LIMI": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "THRIVENI EARTHMOVERS PVT LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BIJU JANATA DAL": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "UNILIGHT REINSURANCE BROKERS PVT LTD": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VINIT GUPTA": {
        "total_amount": 600000,
        "total_transactions": 6,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 600000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "WONDER CEMENT LTD": {
        "total_amount": 200000000,
        "total_transactions": 20,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASHOK                                    KUMAR MODI": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AVINASH MODI": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CYIENT LIMITED": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "APL HEALTHCARE LIMITED": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "EUGIA PHARMA SPECIALITIES LIMITED": {
        "total_amount": 150000000,
        "total_transactions": 15,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 150000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SASMAL INFRASTRUCTURE PRIVATE LIMITED": {
        "total_amount": 440000000,
        "total_transactions": 44,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 390000000,
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MR. MAYANK SINGHAL": {
        "total_amount": 7500000,
        "total_transactions": 12,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 7500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRAKASH BALWANT MENGANE": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRATHMESH CONSTRUCTION": {
        "total_amount": 250000000,
        "total_transactions": 25,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 250000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SARDA ENERGY AND MINERALS LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SECURE METERS LTD": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "WOLKEM INDIA LTD": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DAAWAT FOODS LTD": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MAHENDRA SPONGE AND POWER LIMITED": {
        "total_amount": 2500000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 2500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "WONDER MINERALS  PVT LTD.": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "WONDER MARMOSTONES PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DEVARAHIPPARIGI WIND POWER PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GREENKO RAYALA WIND POWER PRIVATE LIMITE D": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "HAPPYTAT VILLAS PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JK PAPER LIMITED": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KHANDKE WIND ENERGY PRIVATE LIMITED": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SKEIRON RENEWABLE ENERGY AMIDYALA P": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SNEHA KINETIC POWER PROJECTS PVT LTD": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "WARORA CHANDRAPUR BALLARPUR TOLLRO": {
        "total_amount": 10000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CYGNUS POWER INFRA SERVICES PRIVATE": {
        "total_amount": 55000000,
        "total_transactions": 10,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 55000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DESAI TRADING   CONSULTANTS PVT LTD": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MAITHRI LABORATORIES (PVT) LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MSN LABORATORIES PVT LTD": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MSN ORGANICS PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MY HOME INFRASTRUCTURES PVT LTD MY": {
        "total_amount": 95000000,
        "total_transactions": 14,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 45000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SAFAL GOYAL REALTY LLP": {
        "total_amount": 350000000,
        "total_transactions": 35,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 350000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TERACON BUILDTECH LLP": {
        "total_amount": 150000000,
        "total_transactions": 15,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 150000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ACE URBAN DEVELOPERS PVT LTD": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DCM SHRIRAM LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "K R RAJA  JT": {
        "total_amount": 250000000,
        "total_transactions": 25,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 250000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "LAXMIDAS VALLABHDAS   ASMITA MERCHA": {
        "total_amount": 250000000,
        "total_transactions": 25,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 250000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PRASAD AND COMPANY PRIVATE LIMITED": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SEPC POWER PVT LTD OPERATION RETEN": {
        "total_amount": 400000000,
        "total_transactions": 40,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 300000000,
            "BHARATIYA JANATA PARTY": 50000000,
            "TELUGU DESAM PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SUNDARAM INDUSTRIES PVT LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "WELSPUN LIVING LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARAT RASHTRA SAMITHI": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ABIS AGROTECH PVT LTD": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "G S ISPAT": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SRI SIDDHARTH INFRATECH & SERVICES(I) PVT LTD": {
        "total_amount": 9000000,
        "total_transactions": 9,
        "party_donations": {
            "TELUGU DESAM PARTY": 9000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VAIBHAV LAXMI CAPITAL MARKET PRIVATE LIM": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AIC VMR PROJECTS PVT LTD": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "TELUGU DESAM PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JAI GANESH ISPAT AND FERRO ALLOYS PVT LTD": {
        "total_amount": 40000000,
        "total_transactions": 4,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 40000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "M/S T S WIND POWER DEVELOPERS": {
        "total_amount": 23000000,
        "total_transactions": 5,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 23000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "OSTRO JAISALMER PRIVATE LIMITED": {
        "total_amount": 170000000,
        "total_transactions": 17,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 170000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "OSTRO MADHYA WIND PRIVATE LIMITED": {
        "total_amount": 170000000,
        "total_transactions": 17,
        "party_donations": {
            "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": 170000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "WARORA CHANDRAPUR BALLARPUR TOLLROA": {
        "total_amount": 70000000,
        "total_transactions": 7,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 70000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KALPTARU INVESTMENTS PVT.LTD.  PROP": {
        "total_amount": 25000000,
        "total_transactions": 16,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KUSUM MAROTI": {
        "total_amount": 1500000,
        "total_transactions": 6,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 1500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PREETI MAROTI": {
        "total_amount": 1500000,
        "total_transactions": 6,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 1500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASISH FINANCE PRIVATE LIMITED": {
        "total_amount": 70000000,
        "total_transactions": 25,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 50000000,
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PLUTO FINANCE PRIVATE LTD.": {
        "total_amount": 7500000,
        "total_transactions": 12,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 7500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AMAR SECURITIES PVT LTD": {
        "total_amount": 25000000,
        "total_transactions": 25,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 25000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BHARAT BIOTECH INTERNATIONAL LIMITED": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "TELUGU DESAM PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "CHIRON BEHRING VACCINES PVT LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "TELUGU DESAM PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MVM SECURITIES PVT LTD-SELF A/C": {
        "total_amount": 30000000,
        "total_transactions": 21,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RAJ KAMAL DRUGS": {
        "total_amount": 500000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "RANISATI MERCANTILES PVT. LTD.": {
        "total_amount": 7500000,
        "total_transactions": 12,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 7500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SPECO INFRASTRUCTURE": {
        "total_amount": 15000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 15000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ENVIRO CONTROL PRIVATE LIMITED FORM": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TPK PARTNERS": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "BIOVET PVT LTD": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "TELUGU DESAM PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DIPAN  PRAVINCHANDRA  SHAH": {
        "total_amount": 6000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 6000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "JAINENDRA  PRAVINCHANDRA  SHAH": {
        "total_amount": 9000000,
        "total_transactions": 9,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 9000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "MR. BISWAJIT  GHOSH": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 2,
        "expired_amount": 2000
    },
    "RCC NUTRA FILL PRIVATE LIMITED": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "TELUGU DESAM PARTY": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "AMAN  JAISWAL": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASKUS LOGISTICS PVT LTD": {
        "total_amount": 70000000,
        "total_transactions": 7,
        "party_donations": {
            "DRAVIDA MUNNETRA KAZHAGAM (DMK)": 70000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GK ENERGY MARKETERS PRIVATE LIMITED": {
        "total_amount": 60000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 60000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "KUNAL GUPTA": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 1,
        "expired_amount": 1000
    },
    "MRPANKAJKUMARGUPTA": {
        "total_amount": 1000000,
        "total_transactions": 1,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 1000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SYNERGY DEALCOM PVT LTD-SELF A/C": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "ALL INDIA TRINAMOOL CONGRESS": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "TVS MOTOR COMPANY LIMITED": {
        "total_amount": 100000000,
        "total_transactions": 10,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 100000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VALLURUPALLI PRABHU KISHORE": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "JANASENA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "ASHOKA DEVELOPERS": {
        "total_amount": 10000000,
        "total_transactions": 1,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "DYNERE ENGINEERING PRIVATE LIMITED": {
        "total_amount": 10000000,
        "total_transactions": 10,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "GRANULES INDIA LIMITED": {
        "total_amount": 30000000,
        "total_transactions": 3,
        "party_donations": {
            "TELUGU DESAM PARTY": 30000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "INDERDEEP CONSTRUCTION CO": {
        "total_amount": 60000000,
        "total_transactions": 6,
        "party_donations": {
            "BHARATIYA JANATA PARTY": 60000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "PACIFICA  INDIA  PROJECTS PVT LTD": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 5,
        "expired_amount": 5000000
    },
    "PACIFICA DEVELOPERS P LTD REFLECTIO": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 12,
        "expired_amount": 7500000
    },
    "SHIRDI SAI ELECTRICALS LTD": {
        "total_amount": 400000000,
        "total_transactions": 40,
        "party_donations": {
            "TELUGU DESAM PARTY": 400000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SIDDHARTH MATHUR": {
        "total_amount": 1500000,
        "total_transactions": 6,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 1500000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SIDHARTH AGARWAL": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SRI CHAITANYA STUDENTS FACILITY MANAGEME": {
        "total_amount": 60000000,
        "total_transactions": 15,
        "party_donations": {
            "TELUGU DESAM PARTY": 50000000,
            "JANASENA PARTY": 10000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "SYLVANUS BUILDERS AND DEVELOPERS LI": {
        "total_amount": 0,
        "total_transactions": 0,
        "party_donations": {},
        "expired_bonds": 5,
        "expired_amount": 5000000
    },
    "VEDIKA VANIJYA PVT LTD-SELF A/C": {
        "total_amount": 50000000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 50000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIDUR GUPTA": {
        "total_amount": 5000000,
        "total_transactions": 5,
        "party_donations": {
            "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": 5000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    },
    "VIHAAN AUTO VENTURES PRIVATE LIMITED": {
        "total_amount": 20000000,
        "total_transactions": 2,
        "party_donations": {
            "TELUGU DESAM PARTY": 20000000
        },
        "expired_bonds": 0,
        "expired_amount": 0
    }
}

export default data;