import Link from 'next/link';

const MainNavigation = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/events'>Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;