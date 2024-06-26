'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './GoodCardSlider.module.scss'
import Image from 'next/image'
import { Controller, Thumbs } from 'swiper/modules'
import { useState } from 'react'
import { type Swiper as SwiperType } from 'swiper'

export const GoodCardSlider = ({ images }: { images: { id: number, src: string, alt: string }[] }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

	return (
		<div className={styles.wrapper}>

			<Swiper
				modules={[Thumbs]}
				autoHeight
				thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
			>
				{images?.map(image =>
					<SwiperSlide key={image.id} className={styles.image}>
						<div className={styles.slideWrapper}>
							<Image src={image?.src} alt={image?.alt} width={300} height={300} />
						</div>
					</SwiperSlide>
				)}
			</Swiper>
			{images.length > 1 &&
				<Swiper className={styles.thumbs} onSwiper={setThumbsSwiper} slidesPerView={4} modules={[Controller]} spaceBetween={8}>
					{images?.map(image =>
						<SwiperSlide key={image.id} className={styles.thumb}>
							<div className={styles.slideWrapper}>
								<Image src={image?.src} alt={image?.alt} width={300} height={300} />
							</div>
						</SwiperSlide>
					)}
				</Swiper>
			}
		</div >
	)
}