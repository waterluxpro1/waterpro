import clsx from 'clsx'
import styles from './Title3.module.scss'
import type { Title3Props } from './Title3.props'

export const Title3 = ({ className, variant = 'normal', ...props }: Title3Props) => {
	return (
		<h3 className={clsx(styles.title3, className, styles[variant])} {...props}></h3>
	)
}