import Layout from '../Layout'

export default function PrivacyPolicy() {
	let email = 'abhay1029singh@gmail.com'

	return (
		<Layout title="Privacy Policy">
			<section className="prose mx-auto text-center py-16">
				<h1>Privacy Policy</h1>
				<div>
					<h2>WHAT DO WE DO WITH YOUR INFORMATION?</h2>
					<p className="text-justify">
						When you purchase something from our store, as part of the buying
						and selling process, we collect the personal information you give us
						such as your name, address and email address. When you browse our
						store, we also automatically receive your computer&apos;s internet
						protocol (IP) address in order to provide us with information that
						helps us learn about your browser and operating system. Email
						marketing (if applicable): With your permission, we may send you
						emails about our store, new products and other updates.
					</p>
				</div>
				<div>
					<h2>CONSENT</h2>
					<div>
						<h3>How do you get my consent?</h3>
						<p className="text-justify">
							When you provide us with personal information to complete a
							transaction, verify your credit card, place an order, arrange for
							a delivery or return a purchase, we imply that you consent to our
							collecting it and using it for that specific reason only. If we
							ask for your personal information for a secondary reason, like
							marketing, we will either ask you directly for your expressed
							consent, or provide you with an opportunity to say no.
						</p>
						<h3>How do I withdraw my consent?</h3>{' '}
						<p className="text-justify">
							If after you opt-in, you change your mind, you may withdraw your
							consent for us to contact you, for the continued collection, use
							or disclosure of your information, at anytime, by contacting us at
							<b>{email}</b>
						</p>
					</div>
				</div>
				<div>
					<h2>DISCLOSURE</h2>
					<p className="text-justify">
						We may disclose your personal information if we are required by law
						to do so or if you violate our Terms of Service.
					</p>
				</div>
				<div>
					<h2>PAYMENT</h2>
					<p className="text-justify">
						We use Razorpay for processing payments. We do not store your card
						details on our servers. The data is encrypted through the Payment
						Card Industry Data Security Standard (PCI-DSS) when processing
						payment. Your purchase transaction data is only used as long as is
						necessary to complete your purchase transaction. After that is
						complete, your purchase transaction information is not saved.
					</p>
					<p className="text-justify">
						Our payment gateway adheres to the standards set by PCI-DSS as
						managed by the PCI Security Standards Council, which is a joint
						effort of brands like Visa, Mastercard, American Express and
						Discover.
					</p>
					<p className="text-justify">
						PCI-DSS requirements help ensure the secure handling of credit card
						information by our store and its service providers.
					</p>
					<p className="text-justify">
						For more insight, you may also want to read terms and conditions of
						razorpay on{' '}
						<a href="https://razorpay.com" target="_blank" rel="noreferrer">
							Razorpay
						</a>
					</p>
				</div>
				<div>
					<h2>THIRD-PARTY SERVICES</h2>
					<p className="text-justify">
						In general, the third-party providers used by us will only collect,
						use and disclose your information to the extent necessary to allow
						them to perform the services they provide to us.
					</p>
					<p className="text-justify">
						However, certain third-party service providers, such as payment
						gateways and other payment transaction processors, have their own
						privacy policies in respect to the information we are required to
						provide to them for your purchase-related transactions.
					</p>
					<p className="text-justify">
						For these providers, we recommend that you read their privacy
						policies so you can understand the manner in which your personal
						information will be handled by these providers.
					</p>
					<p className="text-justify">
						In particular, remember that certain providers may be located in or
						have facilities that are located a different jurisdiction than
						either you or us. So if you elect to proceed with a transaction that
						involves the services of a third-party service provider, then your
						information may become subject to the laws of the jurisdiction(s) in
						which that service provider or its facilities are located.
					</p>
					<p className="text-justify">
						Once you leave our store&apos;s website or are redirected to a
						third-party website or application, you are no longer governed by
						this Privacy Policy or our website&apos;s Terms of Service.
					</p>
				</div>
				<div>
					<h2>SECURITY</h2>
					<p className="text-justify">
						To protect your personal information, we take reasonable precautions
						and follow industry best practices to make sure it is not
						inappropriately lost, misused, accessed, disclosed, altered or
						destroyed.
					</p>
				</div>
				<div>
					<h2>COOKIES</h2>
					<p className="text-justify">
						Here is a list of cookies that we use. We&apos;ve listed them here
						so you that you can choose if you want to opt-out of cookies or not.
					</p>
				</div>
				<div>
					<h2>AGE OF CONSENT</h2>
					<p className="text-justify">
						By using this site, you represent that you are at least the age of
						majority in your state or province of residence, or that you are the
						age of majority in your state or province of residence and you have
						given us your consent to allow any of your minor dependents to use
						this site.
					</p>
				</div>
				<div>
					<h2>CHANGES TO THIS PRIVACY POLICY</h2>
					<p className="text-justify">
						We reserve the right to modify this privacy policy at any time, so
						please review it frequently. Changes and clarifications will take
						effect immediately upon their posting on the website. If we make
						material changes to this policy, we will notify you here that it has
						been updated, so that you are aware of what information we collect,
						how we use it, and under what circumstances, if any, we use and/or
						disclose it.
					</p>
					<p className="text-justify">
						If our store is acquired or merged with another company, your
						information may be transferred to the new owners so that we may
						continue to sell products to you.
					</p>
				</div>
				<div>
					<h2>QUESTIONS AND CONTACT INFORMATION</h2>
					<p className="text-justify">
						If you would like to: access, correct, amend or delete any personal
						information we have about you, register a complaint, or simply want
						more information contact us at <b>{email}</b>
					</p>
				</div>
				{/* add some terms and conditions that may protect me if third party is responsible for users data lean */}
			</section>
		</Layout>
	)
}
