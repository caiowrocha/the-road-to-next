import { initialTickets } from '@/data'

type TicketDetailsPageProps = {
    params: Promise<{
        ticketId: string
    }>
}

const TicketDetailsPage = async ({ params }: TicketDetailsPageProps) => {
    const { ticketId } = await params

    const ticket = initialTickets.find((ticket) => ticket.id === ticketId)

    if (!ticket) {
        return (
            <div>
                Ticket not found
            </div>
        )
    }

    return (
        <div>
            <h2 className="text-lg">
                {ticket?.title}
            </h2>
            <p>
                {ticket?.content}
            </p>
        </div>
    )
}

export default TicketDetailsPage
