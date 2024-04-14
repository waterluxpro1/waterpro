'use client'

import { Good } from '@/entities/Good/Good'
import type { IGood } from '@/shared/interfaces/Good.interface'
import { Swiper, SwiperSlide } from 'swiper/react'

export const GoodsSlider = ({ className, goods }: { className?: string, goods: IGood[] }) => {
	return (
		<Swiper className={className}
			spaceBetween={10}
			slidesPerView={1}

			breakpoints={{
				480: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 30
				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 30,
				}
			}}
		>
			{goods.map((good) => <SwiperSlide key={good.id}>
				<Good
					id={good.id}
					image={good.images[0].src}
					title={good.name}
					price={good.price_html}
					url={`/ru/good/${good.slug}`}
				/>
			</SwiperSlide>)}
		</Swiper>
	)
}