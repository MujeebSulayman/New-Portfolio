'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
	{
		title: 'Home',
		path: '/',
	},
	{
		title: 'About',
		path: '#about',
	},
	{
		title: 'Projects',
		path: '#projects',
	},
	{
		title: 'Contact',
		path: '#contact',
	},
];

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212a1] backdrop-blur-md'>
			<div className='flex flex-wrap items-center justify-between mx-auto pt-4 pb-4 sm:pl-20 pl-6 sm:pr-32 pr-10'>
				<Link
					href='/'
					className='text-2xl md:text-3xl font-sans text-white font-semibold'>
					TheHemjay
				</Link>
				<div className='block md:hidden'>
					{!navbarOpen ? (
						<button
							id='nav-toggle'
							className='flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white'
							onClick={() => setNavbarOpen(true)}>
							<Bars3Icon className='h-5 w-5' />
						</button>
					) : (
						<button
							id='nav-toggle'
							className='flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white'
							onClick={() => setNavbarOpen(false)}>
							<XMarkIcon className='h-5 w-5' />
						</button>
					)}
				</div>
				<div
					className='hidden md:block md:w-auto'
					id='navbar-default'>
					<ul className='font-medium flex p-4 md:p-0 font-sans rounded-lg flex-row md:space-x-8 mt-0'>
						{navLinks.map((link, index) => {
							return (
								<li key={index}>
									<NavLink
										title={link.title}
										href={link.path}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			{navbarOpen ? <MenuOverlay links={navLinks} /> : null}
		</nav>
	);
};

export default Navbar;
