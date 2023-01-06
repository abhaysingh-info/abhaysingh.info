import * as React from 'react'
import { CustomIntersectionObserver } from '../utils/IntersectionObserver'
import Stats, { StatsProps } from './utility/Stats'
import FancyTitle from './utility/FancyTitle'
import { generateUid } from '../utils/utils'

interface AboutProps {}

interface AboutState {
	personalInfo: {
		key: string
		value: string
		highlight?: boolean
		noCapatilizeValue?: boolean
	}[]
	stats: StatsProps[]
}

class About extends React.Component<AboutProps, AboutState> {
	get getMyAge() {
		const dobDay = 6
		const dobMonth = 3
		const dobYear = 2002

		const dobDate = new Date()
		dobDate.setDate(dobDay)
		dobDate.setMonth(dobMonth - 1)
		dobDate.setFullYear(dobYear)

		return Math.floor(
			(new Date().getTime() - dobDate.getTime()) / 1000 / 60 / 60 / 24 / 365,
		)
	}

	state = {
		personalInfo: [
			{ key: 'first name', value: 'abhay' },
			{ key: 'last name', value: 'singh' },
			{
				key: 'age',
				value: `${this.getMyAge} years`,
			},
			{ key: 'DOB', value: '6th March, 2002' },
			{ key: 'Nationality', value: 'Indian' },
			{ key: 'Freelance', value: 'Available', highlight: true },
			{ key: 'Address', value: 'Pune, Maharashtra' },
			{ key: 'Phone Number', value: '+91 81888-79901' },
			{
				key: 'E-mail',
				value: 'abhay1029singh@gmail.com',
				noCapatilizeValue: true,
			},
			{ key: 'Languages', value: 'English, Hindi' },
		],
		stats: [
			{
				statKey: 'Years of experience',
				statValue: `${new Date().getFullYear() - 2022}`,
				addPlus: true,
			},
			{ statKey: 'Completed Projects', statValue: '11', addPlus: true },
			{ statKey: 'Happy Clients', statValue: '9', addPlus: true },
		],
	}

	render() {
		return (
			<div className="w-full min-h-screen flex flex-col items-center justify-center z-10">
				<div className="text-4xl md:text-5xl lg:text-6xl">
					<FancyTitle
						title={['About', 'Me']}
						backgroundTitle="resume"
						primaryIndex={1}
					/>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-4 z-10">
					<div className="m-5 md:m-0">
						<h2 className="title uppercase text-base-content text-2xl font-bold top-animation">
							Personal info
						</h2>
						<ul className="capitalize grid grid-cols-2 gap-4 mt-7">
							{this.state.personalInfo.map((obj, index) => (
								<li className="left-animation" key={index}>
									<span className="title text-base-content block lg:inline">
										{obj.key}:{' '}
									</span>
									<span
										className={
											'value text-accent-content block lg:inline break-all' +
											' ' +
											(obj.highlight ? 'text-success' : '') +
											' ' +
											(obj.noCapatilizeValue ? 'normal-case' : '')
										}
									>
										{obj.value}
									</span>
								</li>
							))}
						</ul>
					</div>
					<div className="m-5 md:m-0 grid grid-cols-2 gap-4">
						{this.state.stats.map((obj, index) => (
							<div className="right-animation h-full" key={index}>
								<Stats
									statKey={obj.statKey}
									statValue={obj.statValue}
									addPlus={obj.addPlus}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		)
	}
}

export default About
