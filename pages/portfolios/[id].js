import { useRouter } from 'next/router';

const Portfolio = (props) => {
    const { query } = useRouter();

    return (
        <>
            <h1>{JSON.stringify(query, null, 2)}</h1>
        </>
    );
};

export default Portfolio;