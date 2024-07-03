import { Card } from '@/shared/ui/Card/Card'
import styles from './Good.module.scss'
import type { GoodProps } from './Good.props'
import Image from 'next/image'
import { Title5 } from '@/shared/ui/Title5/Title5'
import { Button } from '@/shared/ui/Button'
import Link from 'next/link'

export const Good = ({ good, url, detailsButton = 'Подробнее' }: GoodProps) => {
	return (
		<Card className={styles.good}>
			<div className={styles.imageWrapper}>
				<Image className={styles.image} src={good.images?.[0]?.src} alt={good.name} width={300} height={300} />
			</div>
			<Title5 className={styles.title}>{good.name}</Title5>
			<span className={styles.price}>€{good.price}{Math.floor(+good.price) === +good.price && '.00'} {good.price !== good.regular_price && <><del>€{good.regular_price}</del> <span className={styles.discount}>{Math.round(100 - good.regular_price / good.price * 100)}%</span></>}</span>
			<Link prefetch={false} href={url}>
				<Button className={styles.button} appearance="primary">{detailsButton}</Button>
			</Link>
		</Card>
	)
}