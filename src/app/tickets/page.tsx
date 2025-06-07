import Link from "next/link"
import { ticketPath } from "@/paths"
import { initialTickets } from "../../data"


const TicketsPage = () => {
    return (
        <div>
            {initialTickets.map((ticket) => (
                <div key={ticket.id}>
                    <h2 className="text-lg">{ticket.title}</h2>
                    <Link href={ticketPath(ticket.id)}
                        className="underline text-sm"
                        >
                        View
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default TicketsPage
