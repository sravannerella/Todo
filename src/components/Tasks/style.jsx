export const styles = theme => ({
	item: {
		minHeight: 70,
		borderWidth: 1,
		borderTopWidth: 0.5,
		borderStyle: 'solid',
		borderColor: '#dadce0',
		'&:hover': {
			boxShadow: theme.shadows[2],
			cursor: 'pointer'
		}
	},
	blue: {
		color: '#34a853',
		transition: '0.5s all infinite',
		cursor: 'pointer'
	},
	radio: {
		"&:hover": {
			color: '#34a854',
			transition: '0.5s all infinite',
			cursor: 'pointer'
		}
	}
})