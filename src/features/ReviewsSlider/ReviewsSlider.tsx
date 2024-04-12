'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Review } from '@/entities/Review/Review'

export const ReviewsSlider = ({ className }: { className?: string }) => {
	return (
		<Swiper className={className} slidesPerView={1} spaceBetween={50}
			breakpoints={{
				767: {
					slidesPerView: 2
				}
			}}>
			<SwiperSlide>
				<Review
					image="/img/review-image.png"
					username="Лена Олеиник"
					text="Поставила нам систему эта замечательная команда! Быстро, качественно, красиво. Вода очень вкусная, в чайнике теперь вообще нет накипи. Вся семья довольна! Очень рекомендую!"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Review
					image="/img/review-image.png"
					username="Svetlana Tšerkassova"
					text="Очень довольна этой системой и качество фильтров очень хорошее. Вода с очень хорошим вкусом и очень чистая. Обязательно рекомендую приобрести себе домой такую систему!"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Review
					image="/img/review-image.png"
					username="Инна Леонтьева"
					text="Приобрели фильтр для душа в вашей фирме. Муж установил за 5 минут. При купании ребенка (2 года) в воде из под крана появлялись покраснения на коже, после установки фильтра все проблемы исчезли. У старшей дочери после душа пропала сухость кожи. Рекомендую."
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Review
					image="/img/review-image.png"
					username="Laura Paulman"
					text="Установили фильтр для душа, после душа классный эффект. У меня длинные светлые волосы и с ними постоянные проблемы и после установления фильтра вода их так сильно не сушит, очень помогает в уходе за волосами, всем советую.v"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Review
					image="/img/review-image.png"
					username="Vladimir Golovtšenko"
					text="Купили фильтр для питьевой воды PurePro. Установил сам т.к. живем далеко от Таллинна, не сложно (консультировался по телефону). Все очень довольны, водичка вкусная. Рекомендую."
				/>
			</SwiperSlide>
		</Swiper>
	)
}