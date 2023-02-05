import * as React from 'react'
import RadialProgress from './utility/RadialProgress'
import { CustomIntersectionObserver } from '../utils/IntersectionObserver'
import FancyTitle from './utility/FancyTitle'
import { IRating } from '../interfaces'
import { ratings } from '../utils/data'
import ClientRating from './utility/ClientRating'

interface RatingsProps {}

interface RatingsState {
	ratings: IRating[]
}

class Ratings extends React.Component<RatingsProps, RatingsState> {
	state = {
		ratings: ratings,
	}

	render() {
		return (
			<div className="w-full min-h-screen relative overflow-hidden flex flex-col justify-center items-center">
				<div className="carousel carousel-center w-full p-4 space-x-4 rounded-box">
					{this.state.ratings.map((obj, index) => (
						<div className="carousel-item" key={index}>
							<ClientRating rating={obj} />
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default Ratings
