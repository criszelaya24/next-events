import Link from 'next/link';

const Button = ({ children, link, onClick }) => {
    if (link) {
        return (
            <Link href={link}>
                <a className='btn'>{children}</a>
            </Link>
        );
    }

    return (
        <button className='btn' onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;