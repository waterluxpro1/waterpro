'use server'

export const send = async (state: any, formData: FormData): Promise<{ ok: boolean, message: string }> => {

	const name = formData.get('name')
	const email = formData.get('email')
	const tel = formData.get('tel')
	const address = formData.get('address')
	const message = formData.get('message')

	const response = await fetch(`${process.env.SEND_EMAIL_FUNCTION}?to=${process.env.SEND_EMAIL_TO}&topic=Запрос обратной связи+|+WaterPRO&mail=Запрос обратной связи через сайт https://www.waterpro.ee/\\nИмя: ${name}\\nТелефон: ${tel}\\nПочта: ${email}\\nАдрес: ${address}\\n\\n${message}`)

	if (response.ok) {
		return { ok: true, message: 'Форма отправлена успешно' }
	}

	return { ok: false, message: await response.text() }
}