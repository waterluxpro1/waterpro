const CustomPage = ({ params }: { params: { slug: string } }) => {
	return (
		<>Custom page with slug {params.slug} will be here</>
	)
}

export default CustomPage