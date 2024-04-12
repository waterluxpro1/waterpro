import clsx from 'clsx'
import styles from './Button.module.scss'
import type { ButtonProps } from './Button.props'

export const Button = ({ className, appearance = 'primary', size = 'normal', ...props }: ButtonProps) => {
	return (
		<span className={clsx(styles.button, styles[appearance], styles[size], className)} {...props}></span>
	)
}