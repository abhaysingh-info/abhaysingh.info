import * as React from 'react'
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
				<div className="text-3xl md:text-4xl lg:text-5xl">
					<FancyTitle
						title={['Reviews']}
						backgroundTitle="Client Ratings"
						primaryIndex={0}
					/>
				</div>
				<div className="carousel carousel-center w-full p-10 space-y-14 space-x-10 rounded-box">
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
