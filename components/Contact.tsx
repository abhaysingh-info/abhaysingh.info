import * as React from 'react'
import FancyTitle from './utility/FancyTitle'
import FancyStats, { FancyStatsProps } from './utility/FancyStats'
import {
	faEnvelopeOpen,
	faMap,
	faSquarePhone,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faGithub,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import ContactForm from './utility/ContactForm'

interface ContactProps {}

interface ContactState {
	stats: FancyStatsProps[]
}

class Contact extends React.Component<ContactProps, ContactState> {
	state = {
		stats: [
			{
				icon: faMap,
				statsKey: 'address',
				statsValue: 'Wadgaonsheri, Pune, Maharashtra, India',
			},
			{
				icon: faEnvelopeOpen,
				statsKey: 'mail me',
				statsValue: 'abhay1029singh@gmail.com',
			},
			{
				icon: faSquarePhone,
				statsKey: 'call me',
				statsValue: '+91 81888-79901',
			},
		],
		social: [
			{
				name: 'Instagram',
				url: 'https://instagram.com/abhaysingh.info',
				icon: faInstagram,
			},
			{
				name: 'Github',
				url: 'https://github.com/abhaysingh-info',
				icon: faGithub,
			},
			{
				name: 'Linkedin',
				url: 'https://www.linkedin.com/in/abhay-singh-5b0678249/?original_referer=abhaysingh.info',
				icon: faLinkedin,
			},
		],
	}

	render() {
		return (
			<div className="w-full min-h-screen relative overflow-hidden flex flex-col justify-center items-center">
				<div className="text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
					<FancyTitle
						title={['GET', ' in ', 'touch']}
						backgroundTitle="Contact"
						primaryIndex={2}
					/>
				</div>
				<div className="flex flex-col-reverse md:flex-row w-full gap-4 mt-10">
					<div className="w-full my-5 px-4 mx-auto">
						<div className="text-center md:text-left title uppercase text-2xl tracking-wide font-bold left-animation">
							don&apos;t be shy!
						</div>
						<div className="text-center md:text-left mt-4 normal-case left-animation">
							<p>
								Feel free to get in touch with me. I am always open to
								discussing new projects, creative ideas or opportunities to be
								part of your visions.
							</p>
						</div>
						<div className="mt-4 grid grid-cols-1 gap-2">
							{this.state.stats.map((obj, index) => (
								<div className="zoom-in-animation" key={index}>
									<FancyStats
										statsKey={obj.statsKey}
										statsValue={obj.statsValue}
										icon={obj.icon}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="w-full md:w-1/2 max-w-lg  my-5 px-4 mx-auto">
						{/* <ContactForm /> */}
					</div>
				</div>
				<div className="w-full mt-4 flex justify-center gap-3 md:gap-5">
					{this.state.social.map((obj, index) => (
						<a key={index} href={obj.url} target="_blank" rel="noreferrer">
							<FontAwesomeIcon
								icon={obj.icon}
								className="w-8 h-8 hover:text-primary hover:scale-125"
							/>
						</a>
					))}
				</div>
			</div>
		)
	}
}

export default Contact
