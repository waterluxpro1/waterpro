
import { wordpress } from '@/shared/api/wordpress.service'
import { ReviewsSliderTemplate } from './ReviewsSliderTemplate'
import { headers } from 'next/headers'

export const ReviewsSlider = async ({ className }: { className?: string }) => {
	const t = await wordpress.getTranslations('reviews-slider', headers().get('referer')?.split('/')[3]!)

	console.log(t)

	return await wordpress.getTranslations('reviews-slider', headers().get('referer')?.split('/')[3]!).then((translations) =>
		<ReviewsSliderTemplate className={className} translations={translations} />
	)
}