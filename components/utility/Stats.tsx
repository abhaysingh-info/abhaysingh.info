import * as React from 'react'

export interface StatsProps {
	statValue: string
	addPlus?: boolean
	statKey: string
}

interface StatsState {}

class Stats extends React.Component<StatsProps, StatsState> {
	state = {}
	render() {
		return (
			<div className="card border border-gray-600 p-4 lg:py-6 lg:px-5 cursor-pointer hover:scale-105">
				<div className="value text-5xl lg:text-6xl text-primary font-bold">
					{this.props.statValue}
					<sup>+</sup>{' '}
				</div>
				<div className="title lg:text-2xl break-words cfont-extra-light">
					{this.props.statKey}
				</div>
			</div>
		)
	}
}

export default Stats
