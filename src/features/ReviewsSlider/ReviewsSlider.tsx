
import { wordpress } from '@/shared/api/wordpress.service'
import { ReviewsSliderTemplate } from './ReviewsSliderTemplate'
import { headers } from 'next/headers'

export const ReviewsSlider = async ({ className }: { className?: string }) => {
	const translations = await wordpress.getTranslations('reviews-slider', headers().get('referer')?.split('/')[3]!)

	return (
		<ReviewsSliderTemplate className={className} translations={translations} />
	)
}