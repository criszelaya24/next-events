import Link from 'next/link';

const EventDetail = ({ event = {} }) => {
    const { id, image, title, date, location } = event;
    const readableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <li key={id} className='item'>
            <img src={image} alt={title}/>
            <div className='content'>
                <div>
                    <h2>{title}</h2>
                    <div className='date'><time>{readableDate}</time></div>
                    <div className='address'><address>{location}</address></div>
                </div>
                <div className='actions'>
                    <Link href={`/events/${id}`} >Explore Event</Link>
                </div>
            </div>
        </li>
    );
};

export default EventDetail;