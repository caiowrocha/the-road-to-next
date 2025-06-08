import Link from 'next/link'
import { Placeholder } from '@/components/placeholder'
import { Button } from '@/components/ui/button'
import { initialTickets } from '@/data'
import { ticketsPath } from '@/paths'

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
            <Placeholder
                label="Ticket not found"
                button={
                    <Button asChild variant="outline">
                        <Link href={ticketsPath()}>
                            Go to tickets
                        </Link>
                    </Button>
                }
            />
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
