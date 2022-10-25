import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/eventList';

const Home = ({ events = [] }) => {
    return (
        <>
            <EventList events={events}/>
        </>
    );
};

export const getStaticProps = () => new Promise(res => {
    return setTimeout(() => {
        const events = getFeaturedEvents();

        res({
            props: { events },
        });
    }, 1000);
});

export default Home;
