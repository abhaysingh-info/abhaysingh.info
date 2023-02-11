import Image from 'next/image'
import * as React from 'react'

interface ContactFormProps {}

interface ContactFormState {
	formSubmitErrorMessage: string
	formSubmitSuccessMessage: string
}

class ContactForm extends React.Component<ContactFormProps, ContactFormState> {
	state = {
		formSubmitSuccessMessage: '',
		formSubmitErrorMessage: '',
	}

	resetSubmitMessage = () => {
		this.setState({
			formSubmitErrorMessage: '',
			formSubmitSuccessMessage: '',
		})
	}

	handleSubmit = (event: any) => {
		event.preventDefault()

		const myForm = event.target
		const formData = new FormData(myForm)

		console.log(new URLSearchParams(formData as any).toString())

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData as any).toString(),
		})
			.then(() => {
				this.setState({
					formSubmitSuccessMessage:
						"Thank you for contacting Me, I'll reach to you ASAP.",
					formSubmitErrorMessage: '',
				})
				setTimeout(() => {
					this.resetSubmitMessage()
				}, 5000)
			})
			.catch((error) => {
				this.setState({
					formSubmitSuccessMessage: '',
					formSubmitErrorMessage:
						'Unable to submit form, please reset it again!',
				})
				setTimeout(() => {
					this.resetSubmitMessage()
				}, 5000)
			})
	}

	render() {
		return (
			<form
				name="contact"
				method="POST"
				data-netlify="true"
				onSubmit={this.handleSubmit}
			>
				<div className="form-control w-full">
					<label className="label">
						<span className="label-text">What is your name?</span>
					</label>
					<input
						type="text"
						placeholder="Type your name"
						className="input input-bordered w-full"
						name="name"
						required
					/>
					<label className="label"></label>
				</div>
				<div className="form-control mt-4 w-full">
					<label className="label">
						<span className="label-text">What is your email?</span>
					</label>
					<input
						type="email"
						name="email"
						placeholder="Type your email"
						className="input input-bordered w-full"
						required
					/>
					<label className="label"></label>
				</div>
				<div className="form-control mt-4 w-full">
					<label className="label">
						<span className="label-text">Subject</span>
					</label>
					<input
						type="text"
						name="subject"
						placeholder="What's the matter?"
						className="input input-bordered w-full"
						required
					/>
					<label className="label"></label>
				</div>
				<div className="form-control mt-4">
					<label className="label">
						<span className="label-text">Message</span>
					</label>
					<textarea
						className="textarea textarea-bordered h-24"
						placeholder="Message"
						name="message"
						required
					></textarea>
					<label className="label"></label>
				</div>
				<div className="form-control mt-4 text-center">
					<div className="text-error">{this.state.formSubmitErrorMessage}</div>
					<div className="text-success">
						{this.state.formSubmitSuccessMessage}
					</div>
				</div>
				<div className="form-control mt-4 items-center ">
					<button type="submit" className="btn btn-success btn-block max-w-xs ">
						Submit
					</button>
				</div>
			</form>
		)
	}
}

export default ContactForm
