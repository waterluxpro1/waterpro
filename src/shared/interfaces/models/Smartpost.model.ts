export interface SmartpostModel {
	places: {
		item: {
			place_id: string
			name: string
			country: string
			city: string
			address: string
			group_name: string
		}[]
	}
}