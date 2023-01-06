import * as React from 'react'
import { CustomIntersectionObserver } from '../../utils/IntersectionObserver'

interface FancyTitleProps {
	title: string[]
	backgroundTitle: string
	primaryIndex?: number
}

interface FancyTitleState {}

class FancyTitle extends React.Component<FancyTitleProps, FancyTitleState> {
	state = {}

	render() {
		return (
			<div className="uppercase z-10 text-center relative">
				<h1 className="cfont-extra-bold zoom-in-animation">
					{this.props.title.map((title, index) => {
						return (
							<span
								className={
									this.props.primaryIndex === index ? 'text-primary' : ''
								}
								key={index}
							>
								{title}
							</span>
						)
					})}
				</h1>
				<div
					className="background-about-title absolute text-6xl md:text-7xl lg:text-8xl right-0 left-0 top-0 bottom-0 flex items-center justify-center cfont-extra-bold tracking-widest opacity-5"
					style={{ zIndex: -1, fontFamily: 'monospace' }}
				>
					{this.props.backgroundTitle}
				</div>
			</div>
		)
	}
}

export default FancyTitle
