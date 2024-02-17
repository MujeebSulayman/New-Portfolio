import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const navLinks = [
	{
		title: 'About',
		path: '#about',
	},
	{
		title: 'Project',
		path: '#project',
	},
	{
		title: 'Contact',
		path: '#contact',
	},
];
const Navbar = () => {
	return (
		<nav className='fixed top-0 left-0 right-0 z-10 bg-[#000000b5] backdrop-blur-sm'>
			<div className='flex flex-wrap items-center justify-between mx-auto p-8'>
				<Link
					href={'/'}
					className='text-2xl text-white font-semibold'>
					Logo
				</Link>
				<div
					className='menu hidden md:block md:w-auto'
					id='navbar'>
					<ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt0'>
						{navLinks.map((link, index) => (
							<li key={index}>
								<NavLink
									href={link.path}
									title={link.title}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
