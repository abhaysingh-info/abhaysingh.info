import {
	faMoon,
	faHome,
	faUser,
	faEnvelopeOpen,
	faPen,
	faLightbulb,
	faStar,
} from '@fortawesome/free-solid-svg-icons'
import { Inter } from '@next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({
	children,
	title,
}: {
	children: any
	title: string
}) {
	const [links, setLinks] = useState([
		{
			icon: faHome,
			onSMScreen: true,
			onLGScreen: true,
			title: 'Home',
			url: '/#home',
		},
		{
			icon: faUser,
			onSMScreen: true,
			onLGScreen: true,
			title: 'About',
			url: '/#about',
		},
		{
			icon: faPen,
			onSMScreen: true,
			onLGScreen: true,
			title: 'Skills',
			url: '/#skills',
		},
		{
			icon: faStar,
			onSMScreen: true,
			onLGScreen: true,
			title: 'Ratings',
			url: '/#ratings',
		},
		{
			icon: faEnvelopeOpen,
			onSMScreen: true,
			onLGScreen: true,
			title: 'Connect',
			url: '/#contact',
		},
	])
	const [theme, setTheme] = useState('light')

	const toggleTheme = (theme: string) => {
		const html = document.querySelector('html')
		localStorage.setItem('theme', theme)
		html?.setAttribute('data-theme', theme)
		setTheme(theme)
	}

	useEffect(() => {
		const html = document.querySelector('html')
		const theme = localStorage.getItem('theme')
		const storageTheme = localStorage.getItem('theme')

		if (storageTheme?.length) {
			toggleTheme(storageTheme)
		} else {
			toggleTheme(theme || 'light')
		}
		if (theme) {
			html?.setAttribute('data-theme', theme)
			setTheme(theme)
		}
	}, [theme])

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="author" content="Abhay Singh" />
				<meta
					name="description"
					content="Abhay Singh is a tech enthusiast with over 1 year of experience in web development. He has completed numerous projects and has a strong skill set including HTML, CSS, JavaScript, TypeScript, Python, Angular, React, Express, NestJS, and NextJS. Abhay is available for freelance work and is always open to discussing new ideas and opportunities."
				/>
				<meta
					name="keywords"
					content="Abhay Singh, student, web development, HTML, CSS, JavaScript, TypeScript, Python, Angular, NestJS, NextJS, freelance, Pune, Maharashtra, experience, completed projects, happy clients"
				></meta>
				<meta property="og:title" content="Abhay Singh - Freelancer" />
				<meta
					property="og:description"
					content="Abhay Singh is a tech enthusiast with over 1 year of experience in web development. He has completed numerous projects and has a strong skill set including HTML, CSS, JavaScript, TypeScript, Python, Angular, React, Express, NestJS, and NextJS. Abhay is available for freelance work and is always open to discussing new ideas and opportunities."
				/>
				<meta property="og:image" content="https://abhaysingh.info/me.jpg" />
				<meta property="og:url" content="https://abhaysingh.info/" />
				<meta property="og:type" content="website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<>
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-PDNT6DYHXS"
					strategy="afterInteractive"
				></Script>
				<Script
					id="google-analytics"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || []; function gtag()
							{dataLayer.push(arguments)}
							gtag('js', new Date()); gtag('config', 'G-PDNT6DYHXS');`,
					}}
				></Script>
			</>

			<nav className="fixed z-40 right-0 hidden lg:flex min-h-screen items-center p-3">
				<ul className="menu gap-4 p-2 rounded-box h-1/2 ">
					{links.map((obj, index) =>
						obj.onLGScreen ? (
							<li
								key={index}
								className="group flex items-end text-primary-content"
							>
								<Link
									className={
										'btn group-hover:bg-primary-focus group-hover:scale-125 transition-all duration-300' +
										' '
										// + (state.activeSlideIndex === index ? 'bg-primary' : '')
									}
									// onClick={() => {
									// 	setActiveSlideIndex(index)
									// }}
									href={obj.url}
								>
									{/* <span className="uppercase tracking-wider hidden group-hover:flex ">
												{obj.title}{' '}
											</span>{' '} */}
									<FontAwesomeIcon icon={obj.icon} className="w-4 h-4" />
								</Link>
							</li>
						) : (
							<></>
						),
					)}
				</ul>
			</nav>
			{/* <div className="absolute right-0 mt-3 mr-6 z-50">
				<span
					onClick={() => {
						toggleTheme(theme === 'dark' ? 'light' : 'dark')
					}}
					className="btn flex w-12 h-12 rounded-full items-center justify-center hover:scale-125"
				>
					<FontAwesomeIcon
						icon={theme === 'dark' ? faLightbulb : faMoon}
						className="w-6 h-6 cursor-pointer"
					/>{' '}
					<span className="hidden">toggle theme</span>
				</span>
			</div> */}
			<main>{children}</main>
			<Footer />
		</>
	)
}
