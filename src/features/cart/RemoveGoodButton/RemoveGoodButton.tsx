import { FormField } from '@/shared/ui/FormField/FormField'
import styles from './RemoveGoodButton.module.scss'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { Delete } from '@/shared/icons/Delete'

const removeItem = async (formData: FormData) => {
	'use server'

	const index = +formData.get('index')!

	const array = JSON.parse(cookies().get('cart')?.value ? cookies().get('cart')?.value! : '')

	array.splice(index, 1)

	cookies().set('cart', JSON.stringify(array))

	revalidatePath('.')
}

export const RemoveGoodButton = ({ index }: { index: number }) => {
	return (
		<form className={styles.delete} action={removeItem}>
			<FormField name="index" value={index} />
			<button type="submit"><Delete /></button>
		</form>
	)
}