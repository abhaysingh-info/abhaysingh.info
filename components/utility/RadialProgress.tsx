import * as React from 'react'

interface RadialProgressProps {
	value: number
	title: string
}

interface RadialProgressState {}

class RadialProgress extends React.Component<
	RadialProgressProps,
	RadialProgressState
> {
	state = { value: this.props.value }

	interval: any

	render() {
		return (
			<div className="flex flex-col justify-center items-center gap-3 ">
				<div
					className="radial-progress text-primary ease-in cursor-pointer hover:scale-110"
					style={{ '--value': this.state.value, '--size': '7rem' } as any}
				>
					{this.state.value}%
				</div>
				<div className="uppercase text-primary text-lg">{this.props.title}</div>
			</div>
		)
	}
}

export default RadialProgress
