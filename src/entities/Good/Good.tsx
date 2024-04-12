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
			<Image className={styles.image} src={props.image} alt={props.title} width={300} height={300} />
			<Title5 className={styles.title}>{props.title}</Title5>
			<span className={styles.price} dangerouslySetInnerHTML={{ __html: props.price }}></span>
			<Link href={props.url}>
				<Button className={styles.button} appearance="primary">Подробнее</Button>
			</Link>
		</Card>
	)
}