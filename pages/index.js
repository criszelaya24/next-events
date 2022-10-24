import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/eventList';

const Home = () => {
    const events = getFeaturedEvents();

    return (
        <>
            <EventList events={events}/>
        </>
    );
};

export default Home;
