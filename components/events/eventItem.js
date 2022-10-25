import AddressIcon from '../../icons/addressIcon';
import ArrowRightIcon from '../../icons/arrowRigthIcon';
import DateIcon from '../../icons/dateIcon';
import Button from '../../ui/Button';

const EventItem = ({ event = {} }) => {
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
                    <div className='date'>
                        <DateIcon/>
                        <time>{readableDate}</time>
                    </div>
                    <div className='address'>
                        <AddressIcon/>
                        <address>{location}</address>
                    </div>
                </div>
                <div className='actions'>
                    <Button link={`/events/${id}`}>
                        <span>Explore Event</span>
                        <span className='icon'><ArrowRightIcon/></span>
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default EventItem;