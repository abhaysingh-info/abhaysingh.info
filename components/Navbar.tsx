'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faGripLines } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const links = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'More Info',
		href: '/more-info',
	},
	{
		name: 'Portfolio',
		href: '/portfolio',
	},
	{
		name: 'Review',
		href: '/review',
	},
	{
		name: 'Contact',
		href: '/contact',
	},
]

export default () => {
	const [isNavOpen, setIsNavOpen] = useState(false)
	return (
		<div>
			<nav className="flex border-b justify-between py-5 px-8 gap-4 items-center ">
				<div className="flex ">
					<Image
						src="/logo.png"
						width={120}
						height={40}
						alt="Abhay Singh Logo"
					/>
				</div>

				<div className="hidden lg:flex">
					<ul className="flex gap-4 ">
						{links.map(({ name, href }) => (
							<Link
								href={href}
								key={href}
								className="text-gray-500 hover:text-gray-800 cursor-pointer transition duration-500 font-medium  "
							>
								{name}
							</Link>
						))}
					</ul>
				</div>
				<div className="flex lg:hidden">
					<div
						className="text-3xl cursor-pointer transition duration-500 font-medium "
						onClick={() => setIsNavOpen(!isNavOpen)}
					>
						{!isNavOpen ? (
							<FontAwesomeIcon icon={faGripLines} />
						) : (
							<FontAwesomeIcon icon={faXmark} />
						)}
					</div>
				</div>
			</nav>
			<div
				className={
					'absolute top-0 bottom-0 left-0 right-0 bg-slate-50  flex-col items-center justify-center gap-8 text-3xl transition  ease-out hover:ease-in duration-500 flex' +
					(isNavOpen ? '  ' : ' translate-y-[-100%] ')
				}
			>
				<div
					className="absolute top-6 right-8 text-4xl cursor-pointer transition duration-500 font-medium"
					onClick={() => setIsNavOpen(!isNavOpen)}
				>
					{!isNavOpen ? (
						<FontAwesomeIcon icon={faGripLines} />
					) : (
						<FontAwesomeIcon icon={faXmark} />
					)}
				</div>
				{links.map(({ name, href }) => (
					<Link
						href={href}
						key={href}
						className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors duration-500 font-medium  "
					>
						{name}
					</Link>
				))}
			</div>
		</div>
	)
}
