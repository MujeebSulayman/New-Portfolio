import Link from 'next/link';

const NavLink = ({ href, title }) => {
	return (
		<Link
			href={href}
			className='block py-2 pl-3 pr-4 text-[#ffffff] sm:text-[#ADB7BE] sm:text-[17px] rounded md:p-0 hover:text-white'>
			{title}
		</Link>
	);
};

export default NavLink;
