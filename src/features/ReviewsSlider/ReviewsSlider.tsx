'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Review } from '@/entities/Review/Review'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

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
		import(`@/shared/locales/${locale}/reviews-slider.json`).then((data) => {
			setReviews(data)
		})
	}, [locale])

	return (
		<Swiper className={className} slidesPerView={1} spaceBetween={32}
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
		</Swiper>
	)
}