import PartyList from "./parties/page"

export default function Page() {
    return (
        <PartyList searchParams={{ q: "" }} />
    )
}