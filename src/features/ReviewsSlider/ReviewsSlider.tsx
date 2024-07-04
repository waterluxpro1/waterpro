'use client'

import { SwiperSlide } from 'swiper/react'
import { Review } from '@/entities/Review/Review'
import { Slider } from '@/shared/ui/Slider/Slider'
import { useParams } from 'next/navigation'
import { useTranslations } from '@/shared/hooks/useTranslations.hook'

export const ReviewsSlider = ({ className }: { className?: string }) => {
	const { locale } = useParams()
	const translations = useTranslations('reviews-slider', locale.toString())

	return (
		<Slider className={className} slidesPerView={1} spaceBetween={32} autoHeight
			breakpoints={{
				767: {
					slidesPerView: 2
				}
			}}>
			{translations?.reviews?.map?.((review: any) =>
				<SwiperSlide key={JSON.stringify(review)}>
					<Review
						image={review.image}
						username={review.name}
						text={review.text}
					/>
				</SwiperSlide>
			)}
		</Slider>
	)
}