'use client'

import { useContext, useEffect, useRef, useState, type HTMLAttributes } from 'react'
import styles from './SpoilerBody.module.scss'
import clsx from 'clsx'
import { SpoilerContext } from '../Spoiler/Spoiler'

export const SpoilerBody = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
	const ref = useRef<HTMLDivElement>(null)
	const spoiler = useContext(SpoilerContext)

	const [defaultHeight, setDefaultHeight] = useState<number | null>(null)
	const [height, setHeight] = useState<number | null>(null)

	useEffect(() => {
		if (defaultHeight === null) {
			setDefaultHeight(ref.current!.offsetHeight + 24)
			setHeight(0)
		}

		if (defaultHeight && ref.current) {
			ref.current.style.transition = `height ${0.003 * defaultHeight}s`
		}

		if (spoiler.opened) {
			setHeight(defaultHeight)
		}
		else {
			setHeight(0)
		}
	}, [ref, defaultHeight, spoiler.opened])

	return (
		<div ref={ref} style={{ ...(height || height === 0) && { height } }} className={clsx(styles.spoilerBody, spoiler.opened && styles.opened, className)} {...props}>

		</div>
	)
}

// u2266197_wtest jW9zV4mN0ufD8uK7