import { Card } from '@/shared/ui/Card/Card'
import styles from './Review.module.scss'
import { Body2 } from '@/shared/ui/Body2'
import Image from 'next/image'
import type { ReviewProps } from './Review.props'
export const Review = (props: ReviewProps) => (
<Card className={styles.card}>
<div className={styles.imageContainer}>
<Image className={styles.image} src={props.image} alt="Фотография системы фильтров" width={272} height={292} /></div>
<div className={styles.review}>
<span className={styles.username}>{props.username}</span>
<Body2 className={styles.body}>
	{props.text}
</Body2></div></Card>)
