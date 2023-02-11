import * as React from 'react'
import '../styles/Introduction.module.css'
import { CustomIntersectionObserver } from '../utils/IntersectionObserver'
import Image from 'next/image'
import AbhaySinghImage from '../public/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

interface IntroductionProps {}

interface IntroductionState {
	name: string
	tagline: string
	taglinePostfix: string[]
	activeTaglinePostfixIndex: number
}

class Introduction extends React.Component<
	IntroductionProps,
	IntroductionState
> {
	state = {
		name: 'Abhay Singh',
		tagline: '',
		taglinePostfix: [
			'Student',
			'Tech Enthusiast',
			'Developer',
			'Freelancer',
			'Music Lover',
			'Traveller',
		],
		activeTaglinePostfixIndex: 0,
	}

	taglineChangeInterval: any

	componentDidMount(): void {
		this.taglineChangeInterval = setInterval(() => {
			this.setState({
				...this.state,
				activeTaglinePostfixIndex:
					this.state.activeTaglinePostfixIndex <
					this.state.taglinePostfix.length - 1
						? this.state.activeTaglinePostfixIndex + 1
						: 0,
			})
		}, 4000)
	}

	render() {
		return (
			<>
				<div className="grid grid-cols-1 lg:grid-cols-11 w-full min-h-screen justify-center items-center relative overflow-hidden">
					<div className="order-last lg:order-first lg:col-span-4 min-h-screen flex items-center justify-center">
						<Image
							src={AbhaySinghImage}
							alt="Abhay Singh on a hill, sunset scene"
							className="inline-block w-4/5 rounded-2xl shadow-2xl zoom-in-animation"
							style={{ zIndex: '10' }}
						/>
					</div>
					<div className="lg:col-span-7 min-h-screen flex items-center justify-start ">
						<div className="ml-8">
							<h1 className="top-animation text-6xl lg:text-5xl tracking-wide cfont-extra-bold uppercase text-base-content ">
								I&apos;m <span className="text-primary">{this.state.name}</span>
							</h1>
							<span className="inline-block w-20 h-0.5 bg-base-content mb-0"></span>
							<h2 className="right-animation text-3xl lg:text-2xl tracking-wide cfont-light text-accent-content">
								{this.state.tagline}{' '}
								<>
									{this.state.taglinePostfix.map((obj, index) => (
										<span
											className={
												(this.state.activeTaglinePostfixIndex === index
													? 'is-visible zoom-in'
													: 'is-hidden  zoom-out') +
												' cfont-bold text-accent-content '
											}
											key={`${index}`}
										>
											{obj}
										</span>
									))}
								</>
							</h2>
							<div className="mt-8">
								<div className="bottom-animation">
									<Link
										className="btn gap-2 btn-accent btn-outline rounded-2xl"
										href="/#about"
									>
										More about me{' '}
										<FontAwesomeIcon
											icon={faArrowAltCircleRight}
											className="h-6 w-6"
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Introduction
