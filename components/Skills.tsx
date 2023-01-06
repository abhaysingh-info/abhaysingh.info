import * as React from 'react'
import RadialProgress from './utility/RadialProgress'
import { CustomIntersectionObserver } from '../utils/IntersectionObserver'
import FancyTitle from './utility/FancyTitle'

interface SkillsProps {}

interface SkillsState {
	skills: { title: string; value: number }[]
}

class Skills extends React.Component<SkillsProps, SkillsState> {
	state = {
		skills: [
			{
				title: 'html',
				value: 51,
			},
			{
				title: 'css',
				value: 57,
			},
			{
				title: 'javascript',
				value: 70,
			},
			{
				title: 'typescript',
				value: 52,
			},
			{
				title: 'python',
				value: 60,
			},
			{
				title: 'angular',
				value: 75,
			},
			{
				title: 'react',
				value: 70,
			},
			{
				title: 'express',
				value: 67,
			},
			{
				title: 'nestJS',
				value: 60,
			},
			{
				title: 'nextJS',
				value: 64,
			},
		],
	}

	render() {
		return (
			<div className="w-full min-h-screen relative overflow-hidden flex flex-col justify-center items-center">
				<div className="text-3xl md:text-4xl lg:text-5xl">
					<FancyTitle
						title={['My', 'Skills']}
						backgroundTitle="Flair"
						primaryIndex={0}
					/>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 w-full mt-10">
					{this.state.skills.map((obj, index) => (
						<div
							className={
								'flex flex-col items-center justify-center' +
								' ' +
								(index < this.state.skills.length / 2
									? 'left-animation'
									: 'right-animation')
							}
							key={index}
						>
							<RadialProgress value={obj.value} title={obj.title} />
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default Skills
