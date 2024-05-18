import { Container } from '@/shared/ui/Container'

const PaymentPage = async ({ params }: { params: { id: string } }) => {
	const payment = await fetch(`https://waterpro.ee/wp-json/wc/v3/payment_gateways/${params.id}`, {
		headers: {
			'Authorization': `Basic ${process.env.WP_PASSWORD}`,
			'Content-Type': 'application/json'
		},
	})
	const json = await payment.json()

	console.log(json)

	return (
		<Container>Заказ номер: {params.id} появился в админке.</Container>
	)
}

export default PaymentPage