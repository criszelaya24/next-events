const EventDetail = ({ event }) => {
    return (
        <>
            <div key={event.id}>
                <h1>{event.title}</h1>
                <p>{event.description}</p>
                <img src={event.image}/>
            </div>
        </>
    )
};

export default EventDetail;