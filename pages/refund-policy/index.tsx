import { useState } from 'react'
import Layout from '../Layout'

export default function RefundPolicy() {
	let [email, setEmail] = useState('abhay1029singh@gmail.com')
	let [companysName, setCompanysName] = useState('Abhay')
	let [address, setAddress] = useState(
		'flat no 18, digambar prem society, near stella maris school, pune, maharashtra, india, 411014',
	)

	return (
		<Layout title="Refund Policy">
			<section className="prose mx-auto text-center py-16">
				<h1>Refund Policy</h1>
				<div>
					<p>
						NOTE: Whenever we use the word &quot;Product&quot;, &quot;Item&quot;
						or &quot;Service&quot;, it means the product or service you have
						purchased from us. it includes all tangible and in-tangible product
						or service that we provide.
					</p>
				</div>
				<div>
					<h2>Returns</h2>
					<p className="text-justify">
						Our policy lasts 10 days. If 10 days have gone by since your
						purchase, unfortunately we can&apos;t offer you a refund or
						exchange.
					</p>
					<p className="text-justify">
						You will will not get full-refund if any of the below mentioned
						condition is met:
						<ul>
							<li>We have started working on the project</li>
							<li>6 days have been passed since you have placed your order</li>
							<li>You</li>
						</ul>
					</p>

					<p className="text-justify">
						To be eligible for a return, your item must be unused and in the
						same condition that you received it. It must also be in the original
						packaging.
					</p>
					<p className="text-justify">
						Several types of goods are exempt from being returned. Perishable
						goods such as food, flowers, newspapers or magazines cannot be
						returned. We also do not accept products that are intimate or
						sanitary goods, hazardous materials, or flammable liquids or gases.
					</p>

					<p className="text-justify">
						Additional non-returnable items: Gift cards Downloadable software
						products Some health and personal care items
					</p>

					<p className="text-justify">
						To complete your return, we require a receipt or proof of purchase.
					</p>
					<p className="text-justify">
						Please do not send your purchase back to the manufacturer.
					</p>

					<p className="text-justify">
						There are certain situations where only partial refunds are granted:
						Book with obvious signs of use CD, DVD, VHS tape, software, video
						game, cassette tape, or vinyl record that has been opened. Any item
						not in its original condition, is damaged or missing parts for
						reasons not due to our error. Any item that is returned more than 30
						days after delivery
					</p>
				</div>

				<div>
					<h2>Refunds</h2>
					<p className="text-justify">
						Once your return is received and inspected, we will send you an
						email to notify you that we have received your returned item. We
						will also notify you of the approval or rejection of your refund.
					</p>
					<p className="text-justify">
						If you are approved, then your refund will be processed, and a
						credit will automatically be applied to your credit card or original
						method of payment, within a certain amount of days.
					</p>
				</div>

				<div>
					<h2>Late or missing refunds</h2>
					<p className="text-justify">
						If you haven&apos;t received a refund yet, first check your bank
						account again.
					</p>

					<p className="text-justify">
						Then contact your credit card company, it may take some time before
						your refund is officially posted.
					</p>

					<p className="text-justify">
						Next contact your bank. There is often some processing time before a
						refund is posted.
					</p>

					<p className="text-justify">
						If you&apos;ve done all of this and you still have not received your
						refund yet, please contact us at {email}.
					</p>
				</div>
				<div>
					<h2>Gifts</h2>
					<p className="text-justify">
						If the item was marked as a gift when purchased and shipped directly
						to you, you&apos;ll receive a gift credit for the value of your
						return. Once the returned item is received, a gift certificate will
						be mailed to you.
					</p>
					<p className="text-justify">
						If the item wasn&apos;t marked as a gift when purchased, or the gift
						giver had the order shipped to themselves to give to you later, we
						will send a refund to the gift giver and he will find out about your
						return.
					</p>
				</div>
				<div>
					<h2>Shipping</h2>
					<p className="text-justify">
						To return your product, you should mail your product to: {address}
					</p>
					<p className="text-justify">
						You will be responsible for paying for your own shipping costs for
						returning your item. Shipping costs are non-refundable. If you
						receive a refund, the cost of return shipping will be deducted from
						your refund.
					</p>
					<p className="text-justify">
						Depending on where you live, the time it may take for your exchanged
						product to reach you, may vary.
					</p>
					<p className="text-justify">
						If you are shipping an item over $75, you should consider using a
						trackable shipping service or purchasing shipping insurance. We
						don&apos;t guarantee that we will receive your returned item.
					</p>
				</div>
			</section>
		</Layout>
	)
}
