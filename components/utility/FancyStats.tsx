import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'

export interface FancyStatsProps {
	icon: any
	statsKey: string
	statsValue: string
}

interface FancyStatsState {}

class FancyStats extends React.Component<FancyStatsProps, FancyStatsState> {
	state = {}
	render() {
		return (
			<div className="stat max-w-max">
				<div
					className="stat-figure text-secondary "
					style={{ gridColumnStart: '1' }}
				>
					<FontAwesomeIcon
						icon={this.props.icon}
						className="h-10 w-10 text-primary"
					/>
				</div>
				<div className="stat-title uppercase" style={{ gridColumnStart: '2' }}>
					{this.props.statsKey}
				</div>
				<div
					className="stat-value text-sm break-word whitespace-normal normal-case"
					style={{ gridColumnStart: '2' }}
				>
					{this.props.statsValue}
				</div>
			</div>
		)
	}
}

export default FancyStats
