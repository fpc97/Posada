module.exports = {
	plugins: [
		'gatsby-plugin-sass',
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Lora`,
						variants: [`400`, `400i`, `700`, `700i`]
					},
					{
						family: `Merriweather`,
						variants: [`400`, `700i`]
					},
					{
						family: `Open Sans`,
						variants: [`400`, `400i`, `700`, `700i`]
					}
				],
			},
		},
		// LEAFLET
		{
			resolve: 'gatsby-plugin-react-leaflet',
			options: {
				linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
			}
		}
	]
}