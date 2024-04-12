import styles from './Checkbox.module.scss'
import clsx from 'clsx'
import type { CheckboxProps } from './Checkbox.props'

export const Checkbox = ({ id, className, label, ...props }: CheckboxProps) => {
	return (
		<>
			<input type="checkbox" className={styles.checkbox} id={id} {...props} />
			<label htmlFor={id} className={clsx(styles.label, className)}><span>{label}</span></label>
		</>
	)
}