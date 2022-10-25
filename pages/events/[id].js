import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import { getEventById, getAllEvents } from '../../dummy-data';
import ErrorAlert from '../../ui/error-alert';

const Event = ({ event }) => {
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

export const getStaticProps = (context) => new Promise(res => {
    return setTimeout(() => {
        const { params: { id } } = context;
        const event = getEventById(id);

        if (!event) res({ notFound: true });

        res({
            props: { event },
        });
    }, 1000);
});

export const getStaticPaths = () => {
    return {
        paths: [
            { params: { id: 'e1' } },
        ],
        fallback: true,
    };
};

export default Event;