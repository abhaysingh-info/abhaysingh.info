import React from 'react'
import '../styles/Home.module.css'
import Introduction from '../components/Introduction'
import About from '../components/About'
import Skills from '../components/Skills'
import Ratings from '../components/Ratings'
import Contact from '../components/Contact'
import {
	CustomIntersectionObserver,
	toggleAnimationExecutor,
} from '../utils/IntersectionObserver'
import Layout from './Layout'

interface HomeProps {}

interface HomeState {
	title: string
	activeSlideIndex: number
	currentTheme: string
}

class Home extends React.Component<HomeProps, HomeState> {
	state = {
		title: 'Abhay Singh',
		activeSlideIndex: 0,
		currentTheme: 'light',
	}

	setActiveSlideIndex(index: number) {
		this.setState({
			...this.state,
			activeSlideIndex: index,
		})
	}

	setTheme(theme: string) {
		const html = document.querySelector('html')
		localStorage.setItem('theme', theme)
		html?.setAttribute('data-theme', theme)
		this.setState({
			...this.state,
			currentTheme: theme,
		})
	}

	observer?: IntersectionObserver

	async componentDidMount() {
		// intersection observer
		this.observer = CustomIntersectionObserver(toggleAnimationExecutor)

		const documentExecutor = async () => {
			document
				?.querySelectorAll('.left-animation')
				.forEach((element: Element) => {
					this.observer?.observe(element)
				})
			document
				?.querySelectorAll('.right-animation')
				.forEach((element: Element) => {
					this.observer?.observe(element)
				})
			document
				?.querySelectorAll('.top-animation')
				.forEach((element: Element) => {
					this.observer?.observe(element)
				})
			document
				?.querySelectorAll('.bottom-animation')
				.forEach((element: Element) => {
					this.observer?.observe(element)
				})
			document
				?.querySelectorAll('.zoom-in-animation')
				.forEach((element: Element) => {
					this.observer?.observe(element)
				})
			document
				?.querySelectorAll('.zoom-out-animation')
				.forEach((element: Element) => {
					this.observer?.observe(element)
				})
		}
		documentExecutor()
	}

	componentWillUnmount(): void {
		this.observer?.disconnect()
	}

	render() {
		return (
			<Layout title={this.state.title}>
				<section className="bg-base-100">
					<div className="accent-pyramid border-primary left-animation"></div>
					<div className="accent-pyramid-opposite border-primary right-animation"></div>

					<section className="mx-auto">
						<div className="mb-16" id="home">
							<Introduction />
						</div>
						<div className="lg:w-10/12 mx-auto mb-16" id="about">
							<About />
						</div>
						<div className="lg:w-10/12 mx-auto mb-16" id="skills">
							<Skills />
						</div>
						<div className="lg:w-10/12 mx-auto mb-16" id="ratings">
							<Ratings />
						</div>
						<div className="lg:w-10/12 mx-auto mb-16" id="contact">
							<Contact />
						</div>
					</section>
				</section>
			</Layout>
		)
	}
}

export default Home
