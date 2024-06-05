import { Good } from '@/entities/Good/Good'
import { woocomerence } from '@/shared/api/wordpress.service'
import type { WpGoodProps } from './WpGood.props'

export const WpGood = async (props: WpGoodProps) => {
	const good = await woocomerence.getGoodById(props.goodId)

	return (
		<Good
			good={good}
			url={'/'}
		/>
	)
}