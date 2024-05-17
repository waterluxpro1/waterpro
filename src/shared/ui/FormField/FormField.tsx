import type { FormFieldProps } from './FormField.props'

export const FormField = (props: FormFieldProps) => (
	<input {...props} readOnly style={{ display: 'none' }} />
)