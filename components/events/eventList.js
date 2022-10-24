import EventDetail from './eventDetail';

const EventList = ({ events }) => {
    return (
        <div className='list'>
            { events.map((event, index) => {
                return (
                    <EventDetail key={index} event={event}/>
                );
            })}
        </div>
    );
};

export default EventList;