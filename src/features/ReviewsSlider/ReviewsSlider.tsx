'use client'

import { SwiperSlide } from 'swiper/react'
import { Review } from '@/entities/Review/Review'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Slider } from '@/shared/ui/Slider/Slider'

export const ReviewsSlider = ({ className }: { className?: string }) => {
	const { locale } = useParams()

	const [reviews, setReviews] = useState<{
		title: string
		reviews: {
			image: string
			name: string
			text: string
		}[]
	} | undefined>()

	useEffect(() => {
		try {
			import(`@/shared/locales/${locale}/reviews-slider.json`).then((data) => {
				setReviews(data)
			})
		} catch (e) {
			console.error(e)
		}
	}, [locale])

	return (
		<Slider className={className} slidesPerView={1} spaceBetween={32} autoHeight
			breakpoints={{
				767: {
					slidesPerView: 2
				}
			}}>
			{reviews?.reviews.map((review) =>
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