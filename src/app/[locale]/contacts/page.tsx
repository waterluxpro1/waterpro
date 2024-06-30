import { Container } from '@/shared/ui/Container'
import styles from './page.module.scss'
import { OverflowImage } from '@/shared/ui/OverflowImage/OverflowImage'
import Image from 'next/image'
import { Body1 } from '@/shared/ui/Body1'
import { Title1 } from '@/shared/ui/Title1/Title1'
import { wordpress } from '@/shared/api/wordpress.service'
import { headers } from 'next/headers'

export const generateMetadata = async ({ params }: { params: { locale: string } }) => {
	const translations = await wordpress.getTranslations('contacts', params.locale)

	return {
		title: `${translations.h1} | Water PRO`,
		openGraph: {
			url: headers().get('referer') ? headers().get('referer')! : 'https://www.waterpro.ee'
		}
	}
}

const Contacts = async ({ params }: { params: { locale: string } }) => {
	const translations = await wordpress.getTranslations('contacts', params.locale)

	return (
		<>
			<OverflowImage
				content={
					<div className={styles.head}>
						<Title1>{translations.h1}</Title1>
					</div>
				}
				image={<Image className={styles.image} src="/img/drops.png" alt="Капли воды" width={1000} height={480} />}
			/>
			<Container className={styles.container}>
				<div className={styles.card}>
					<ul className={styles.info}>
						<li>WaterPro OÜ</li>
						<li>info@waterpro.ee</li>
						<li>Tel. +372 56484797</li>
						<li>Reg.nr.14608633</li>
						<li>Swedbank</li>
						<li>nr.EE402200221070576725</li>
					</ul>
					<Body1 className={styles.body}>{translations.addition}</Body1>
				</div>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.9890384798!2d24.836751905845418!3d59.43672999490889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692ec957dddc603%3A0xcdbde93648826582!2zUHVuYW5lIDY4LCAxMzYxOSBUYWxsaW5uLCDQrdGB0YLQvtC90LjRjw!5e0!3m2!1sru!2sru!4v1719762123214!5m2!1sru!2sru" width="100%" height="450" allowFullScreen style={{ border: '0' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			</Container >
		</>
	)
}

export default Contacts
