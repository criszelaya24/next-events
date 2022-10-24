import EventDetail from './eventDetail';

const EventList = ({ events }) => {
    return (
        <>
            { events.map(event => {
                return (
                    <EventDetail event={event}/>
                );
            })}
        </>
    );
};

export default EventList;