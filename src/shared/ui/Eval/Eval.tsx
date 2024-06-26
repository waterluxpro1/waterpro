import styles from './Eval.module.scss'
import type { EvalProps } from './Eval.props'
import clsx from 'clsx'

export const Eval = ({ children, className, ...props }: EvalProps) => {
	return (
		<div className={clsx(styles.eval, className)} dangerouslySetInnerHTML={{ __html: children ? children : '' }} {...props}></div>
	)
}