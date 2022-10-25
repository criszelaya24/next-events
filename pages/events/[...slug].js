import { useRouter } from 'next/router';
import ErrorAlert from '../../ui/error-alert';
import Button from '../../ui/Button';
import { getFilteredEvents } from '../../dummy-data';
import ResultsTitle from '../../components/events/results-title';
import EventList from '../../components/events/eventList';
const FilterEvents = () => {
    const { query: { slug: filterData } } = useRouter();

    if (!filterData) return <p className='center'>Loading...</p>;

    const year = +filterData[0];
    const month = +filterData[1];

    if (
        isNaN(year) ||
        isNaN(month)
    ) {
        return (
            <>
                <ErrorAlert>
                    <p>Invalid filter. Please adjust your values!</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </>
        );
    }

    const events = getFilteredEvents({ year, month });

    if (!events || events.length === 0) {
        return (
            <>
                <ErrorAlert>
                    <p>No events found for the chosen filter!</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </>
        );
    }

    const date = new Date(year, month - 1);

    return (
        <>
            <ResultsTitle date={date}/>
            <EventList events={events}/>
        </>
    );
};

export default FilterEvents;