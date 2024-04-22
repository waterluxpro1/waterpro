import Image from 'next/image'
import styles from './Category.module.scss'
import type { CategoryProps } from './Category.props'
import { Button } from '@/shared/ui/Button'
import Link from 'next/link'

export const Category = (props: CategoryProps) => {
	return (
		<Link prefetch={false} href={props.href} className={styles.card}>
			<Image src={props.image} alt={props.title} width={220} height={220} />
			<span className={styles.title}>{props.title}</span>
			<Button size="normal" appearance="primary" className={styles.button}>Перейти</Button>
		</Link>
	)
}