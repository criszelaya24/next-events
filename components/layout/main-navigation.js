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
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/portfolios'>Portfolios</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;