import Link from 'next/link';

const Button = ({ children, link }) => {
    return (
        <Link href={link}><a className='btn'>{children}</a></Link>
    );
};

export default Button;