'use client'

import { SwiperSlide } from 'swiper/react'
import { Review } from '@/entities/Review/Review'
import { Slider } from '@/shared/ui/Slider/Slider'

export const ReviewsSliderTemplate = ({ className, translations }: { className?: string, translations: any }) => {
	return (
		<Slider className={className} slidesPerView={1} spaceBetween={32} autoHeight
			breakpoints={{
				767: {
					slidesPerView: 2
				}
			}}>
			{translations?.reviews.map((review: any) =>
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