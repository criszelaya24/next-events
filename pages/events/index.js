import Link from 'next/link';
const Events = () => {
    return (
        <>
            <h1>Events Page</h1>
            <Link href="/events/123">Link to specific event</Link>
            <Link href="/events/2022/10/25">Filter Events</Link>
        </>
    );
};

export default Events;