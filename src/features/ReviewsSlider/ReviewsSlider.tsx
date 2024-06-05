'use client'

import { SwiperSlide } from 'swiper/react'
import { Review } from '@/entities/Review/Review'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Slider } from '@/shared/ui/Slider/Slider'
import { wordpress } from '@/shared/api/wordpress.service'

export const ReviewsSlider = ({ className }: { className?: string }) => {
	const { locale } = useParams()

	const [translations, setTranslations] = useState<{
		title: string
		reviews: {
			image: string
			name: string
			text: string
		}[]
	} | undefined>()

	useEffect(() => {
		(async () => {
			const translations = await wordpress.getTranslations('reviews-slider', locale.toString())
			setTranslations(translations)
		})()
	}, [locale])

	return (
		<Slider className={className} slidesPerView={1} spaceBetween={32} autoHeight
			breakpoints={{
				767: {
					slidesPerView: 2
				}
			}}>
			{translations?.reviews.map((review) =>
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