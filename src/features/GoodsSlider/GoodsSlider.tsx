'use client'

import { Good } from '@/entities/Good/Good'
import type { IGood } from '@/shared/interfaces/models/Good.interface'
import { Slider } from '@/shared/ui/Slider/Slider'
import { SwiperSlide } from 'swiper/react'

export const GoodsSlider = ({ className, goods, lang }: { className?: string, goods: IGood[], lang: string }) => {
	return (
		<Slider className={className}
			spaceBetween={10}
			slidesPerView={2}

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
			{goods?.map((good) => <SwiperSlide key={good.id}>
				<Good
					id={good.id}
					image={good.images[0]?.src}
					title={good.name}
					price={good.price_html}
					url={`/${lang}/good/${good.slug}`}
				/>
			</SwiperSlide>)}
		</Slider>
	)
}