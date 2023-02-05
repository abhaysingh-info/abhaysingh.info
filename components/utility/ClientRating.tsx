import Image from 'next/image'
import * as React from 'react'
import { IRating } from '../../interfaces'

interface ClientRatingProps {
	rating: IRating
}

interface ClientRatingState {
	rating: IRating
}

class ClientRating extends React.Component<
	ClientRatingProps,
	ClientRatingState
> {
	state = {
		rating: this.props.rating,
	}

	getStars = () => {
		console.log(this.state.rating)
		let output = []
		for (let i = 1; i <= 5; i++) {
			console.log(i === this.state.rating.stars)
			output.push(
				<input
					key={i}
					type="radio"
					name={
						'rating-' +
						this.state.rating.name.split(' ').join('') +
						this.state.rating.stars
					}
					className="mask mask-star-2 bg-orange-400"
					checked={i === this.state.rating.stars}
					disabled
				/>,
			)
		}
		return output
	}

	render() {
		return (
			<div className="card w-72 md:w-96 bg-base-100 shadow-2xl">
				<figure className="flex justify-center items-center py-5">
					<Image
						src={this.state.rating.profile_picture}
						alt={this.state.rating.name + "'s profile picture"}
						width={100}
						height={100}
						className="rounded-full"
					/>
				</figure>
				<div className="card-body items-center text-center">
					<h2 className="card-title">{this.state.rating.name}</h2>
					<p>{this.state.rating.message}</p>
					<div className="card-actions">
						<div className="rating rating-sm md:rating-md 2xl:rating-lg">
							{this.getStars().map((obj, index) => (
								<React.Fragment key={index}>{obj}</React.Fragment>
							))}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ClientRating
