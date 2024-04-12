import { Container } from '../Container'
import styles from './OverflowImage.module.scss'
import type { OverflowImageProps } from './OverflowImage.props'

export const OverflowImage = (props: OverflowImageProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<Container>
					<div className={styles.body}>
						{props.content}
					</div>
				</Container>
			</div>
			<div className={styles.image}>
				{props.image}
			</div>
		</div>
	)
}