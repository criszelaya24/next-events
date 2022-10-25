import { useRouter } from 'next/router';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import { getEventById } from '../../dummy-data';
import ErrorAlert from '../../ui/error-alert';

const Event = () => {
    const { query: { id } } = useRouter();
    const event = getEventById(id);

    if (!event) return <ErrorAlert>event not found</ErrorAlert>;

    return (
        <>
            <EventSummary event={event}/>
            <EventLogistics event={event}/>
            <EventContent>
                { event.description }
            </EventContent>
        </>
    );
};

export default Event;