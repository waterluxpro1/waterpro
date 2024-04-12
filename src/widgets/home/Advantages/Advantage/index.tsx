import Image from 'next/image'
import styles from './Advantage.module.scss'
import type { AdvantageProps } from './Advantage.props'
import { Title4 } from '@/shared/ui/Title4'
import { Body2 } from '@/shared/ui/Body2'

export const Advantage = (props: AdvantageProps) => {
	return (
		<div>
			<Image className={styles.icon} src={props.icon} alt={props.title} width={80} height={80} />
			<Title4 className={styles.title}>{props.title}</Title4>
			<Body2 className={styles.description}>
				{props.description}
			</Body2>
		</div>
	)
}