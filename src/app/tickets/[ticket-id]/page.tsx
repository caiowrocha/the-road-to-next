
type TicketDetailsPageProps = {
    params: Promise<{
        ['ticket-id']: string
    }>
}

const TicketDetailsPage = async ({ params }: TicketDetailsPageProps) => {
    const { "ticket-id": ticketId } = await params

    return <h2 className="text-lg">
            Ticket Page - {ticketId}
    </h2>
}

export default TicketDetailsPage
