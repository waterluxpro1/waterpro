export interface PromocodeModel {
	id: number
	code: string
	amount: string
	date_expires: string
	discount_type: 'percent' | 'fixed_cart'
}