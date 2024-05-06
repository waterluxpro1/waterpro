import { Card } from '@/shared/ui/Card/Card'
import styles from './Good.module.scss'
import type { GoodProps } from './Good.props'
import Image from 'next/image'
import { Title5 } from '@/shared/ui/Title5/Title5'
import { Button } from '@/shared/ui/Button'
import Link from 'next/link'

export const Good = (props: GoodProps) => {
	return (
		<Card className={styles.good}>
			<div className={styles.imageWrapper}>
				<Image className={styles.image} src={props.image} alt={props.title} width={300} height={300} />
			</div>
			<Title5 className={styles.title}>{props.title} Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis culpa, nostrum ullam quis error perspiciatis, repellat omnis ex in unde atque esse a? Facilis sapiente error similique possimus, sit recusandae?</Title5>
			<span className={styles.price} dangerouslySetInnerHTML={{ __html: props.price }}></span>
			<Link prefetch={false} href={props.url}>
				<Button className={styles.button} appearance="primary">Подробнее</Button>
			</Link>
		</Card>
	)
}