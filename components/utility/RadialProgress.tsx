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
	state = { value: 0 }

	interval: any

	componentDidMount(): void {
		let stateInitialValue = 0
		this.interval = setInterval(() => {
			stateInitialValue += 1
			if (stateInitialValue > this.props.value) {
				return clearInterval(this.interval)
			}
			this.setState({
				...this.state,
				value: stateInitialValue,
			})
		}, 2)
	}
	render() {
		return (
			<div className="flex flex-col justify-center items-center gap-3 ">
				<div
					className="radial-progress text-primary ease-in "
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
