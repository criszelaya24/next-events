import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/eventList';
import { useRouter } from 'next/router';
import EventsSearch from '../../components/events/events-search';
const Events = () => {
    const router = useRouter();
    const events = getAllEvents();
    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    };

    return (
        <>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList events={events}/>
        </>
    );
};

export default Events;