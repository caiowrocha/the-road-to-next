
type TicketDetailsPageProps = {
    params: Promise<{
        ticketId: string
    }>
}

const TicketDetailsPage = async ({ params }: TicketDetailsPageProps) => {
    const { ticketId } = await params

    return <h2 className="text-lg">
            Ticket Page - {ticketId}
    </h2>
}

export default TicketDetailsPage
