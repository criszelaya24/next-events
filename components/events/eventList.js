import EventItem from './eventItem';

const EventList = ({ events }) => {
    return (
        <div className='list'>
            { events.map((event, index) => {
                return (
                    <EventItem key={index} event={event}/>
                );
            })}
        </div>
    );
};

export default EventList;