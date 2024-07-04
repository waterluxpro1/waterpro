import { useEffect, useState } from 'react'

export const useQuery = <T>(input: string | URL): T | undefined => {
	const [data, setData] = useState<T>()

	useEffect(() => {
		(async () => {
			const response = await fetch(input, { cache: 'no-cache' })
			const json = await response.json()

			setData(json)
		})()
	}, [input])

	return data
}