const data = [
    "ALL INDIA ANNA DRAVIDA MUNNETRA KAZHAGAM",
    "BHARAT RASHTRA SAMITHI",
    "BHARATIYA JANATA PARTY",
    "PRESIDENT, ALL INDIA CONGRESS COMMITTEE",
    "SHIVSENA",
    "TELUGU DESAM PARTY",
    "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)",
    "DRAVIDA MUNNETRA KAZHAGAM (DMK)",
    "JANATA DAL ( SECULAR )",
    "NATIONALIST CONGRESS PARTY MAHARASHTRA PRADESH",
    "ALL INDIA TRINAMOOL CONGRESS",
    "BIHAR PRADESH JANTA DAL(UNITED)",
    "RASHTRIYA JANTA DAL",
    "AAM AADMI PARTY",
    "ADYAKSHA SAMAJVADI PARTY",
    "SHIROMANI AKALI DAL",
    "JHARKHAND MUKTI MORCHA",
    "JAMMU AND KASHMIR NATIONAL CONFERENCE",
    "BIJU JANATA DAL",
    "GOA FORWARD PARTY",
    "MAHARASHTRAWADI GOMNTAK PARTY",
    "SIKKIM KRANTIKARI MORCHA",
    "JANASENA PARTY",
    "SIKKIM DEMOCRATIC FRONT"
]

interface PartyInfo {
    [party: string]: {
        short_name: string;
        proper_name: string;
    };
}

const party_info: PartyInfo[] = [
    {
        "ALL INDIA ANNA DRAVIDA MUNNETRA KAZHAGAM": {
            "short_name": "AIADMK",
            "proper_name": "All India Anna Dravida Munnetra Kazhagam"
        },
        "BHARAT RASHTRA SAMITHI": {
            "short_name": "BRS",
            "proper_name": "Bharat Rashtra Samithi"
        },
        "BHARATIYA JANATA PARTY": {
            "short_name": "BJP",
            "proper_name": "Bharatiya Janata Party"
        },
        "PRESIDENT, ALL INDIA CONGRESS COMMITTEE": {
            "short_name": "INC",
            "proper_name": "Indian National Congress"
        },
        "SHIVSENA": {
            "short_name": "SS",
            "proper_name": "Shiv Sena"
        },
        "TELUGU DESAM PARTY": {
            "short_name": "TDP",
            "proper_name": "Telugu Desam Party"
        },
        "YSR  CONGRESS PARTY  (YUVAJANA SRAMIKA RYTHU CONGRESS PARTY)": {
            "short_name": "YSRCP",
            "proper_name": "YSR Congress Party"
        },
        "DRAVIDA MUNNETRA KAZHAGAM (DMK)": {
            "short_name": "DMK",
            "proper_name": "Dravida Munnetra Kazhagam"
        },
        "JANATA DAL ( SECULAR )": {
            "short_name": "JD(S)",
            "proper_name": "Janata Dal (Secular)"
        },
        "NATIONALIST CONGRESS PARTY MAHARASHTRA PRADESH": {
            "short_name": "NCP",
            "proper_name": "Nationalist Congress Party"
        },
        "ALL INDIA TRINAMOOL CONGRESS": {
            "short_name": "AITC",
            "proper_name": "All India Trinamool Congress"
        },
        "BIHAR PRADESH JANTA DAL(UNITED)": {
            "short_name": "JD(U)",
            "proper_name": "Janata Dal (United)"
        },
        "RASHTRIYA JANTA DAL": {
            "short_name": "RJD",
            "proper_name": "Rashtriya Janata Dal"
        },
        "AAM AADMI PARTY": {
            "short_name": "AAP",
            "proper_name": "Aam Aadmi Party"
        },
        "ADYAKSHA SAMAJVADI PARTY": {
            "short_name": "SP",
            "proper_name": "Samajwadi Party"
        },
        "SHIROMANI AKALI DAL": {
            "short_name": "SAD",
            "proper_name": "Shiromani Akali Dal"
        },
        "JHARKHAND MUKTI MORCHA": {
            "short_name": "JMM",
            "proper_name": "Jharkhand Mukti Morcha"
        },
        "JAMMU AND KASHMIR NATIONAL CONFERENCE": {
            "short_name": "JKNC",
            "proper_name": "Jammu and Kashmir National Conference"
        },
        "BIJU JANATA DAL": {
            "short_name": "BJD",
            "proper_name": "Biju Janata Dal"
        },
        "GOA FORWARD PARTY": {
            "short_name": "GFP",
            "proper_name": "Goa Forward Party"
        },
        "MAHARASHTRAWADI GOMNTAK PARTY": {
            "short_name": "MGP",
            "proper_name": "Maharashtrawadi Gomntak Party"
        },
        "SIKKIM KRANTIKARI MORCHA": {
            "short_name": "SKM",
            "proper_name": "Sikkim Krantikari Morcha"
        },
        "JANASENA PARTY": {
            "short_name": "JSP",
            "proper_name": "Jana Sena Party"
        },
        "SIKKIM DEMOCRATIC FRONT": {
            "short_name": "SDF",
            "proper_name": "Sikkim Democratic Front"
        }
    }
]

export function getPartyInfo(party: string) {
    const partyInfo = party_info[0][party];
    return partyInfo;
}

export function getPartyFullName(short_name: string) {
    const party = party_info[0];
    for (const [key, value] of Object.entries(party)) {
        if (value.short_name === short_name) {
            return key;
        }
    }
}

export default data;