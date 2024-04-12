import Image from 'next/image'
import styles from './Loading.module.scss'

export const Loading = () => {
	return (
		<div className={styles.wrapper}>
			<Image className={styles.spinner} src="/ZKZg.gif" alt="Loading spinner" width={100} height={100} unoptimized />
		</div>
	)
}