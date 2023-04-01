import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
	const [links, setLinks] = useState([
		{
			url: '/privacy-policy',
			title: 'Privacy Policy',
		},
		{
			url: '/terms-and-conditions',
			title: 'Terms and Conditions',
		},
		{
			url: '/refund-policy',
			title: 'Refund Policy',
		},
	])

	return (
		<footer className="bg-base-200">
			<div className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<div className="py-4 text-base-content flex flex-col sm:flex-row">
						Made with ❤️ by{' '}
						<a
							href="https://instagram.com/abhaysingh.info"
							className="mx-1 hover:underline"
							target="_blank"
						>
							Abhay Singh
						</a>
					</div>
					<div>
						<ul className="menu menu-horizontal">
							{links.map((obj, index) => (
								<li key={index}>
									<Link href={obj.url}>{obj.title}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
