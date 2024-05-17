import clsx from 'clsx'
import styles from './CartGoodParam.module.scss'

export const CartGoodParam = ({ title, value, className }: { title?: string, value?: string, className?: string }) => (
	<div className={clsx(styles.labeledField, className)}>
		<span className={styles.mobileLabel}>{title}</span>
		<span>{value}</span>
	</div>
)
