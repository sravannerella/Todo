export const styles = theme => ({
	item: {
		minHeight: 70,
		borderWidth: 1,
		borderTopWidth: 0.5,
		borderStyle: 'solid',
		borderColor: '#dadce0',
		transition: '0.1s all ease-in-out',
		'&:hover': {
			boxShadow: theme.shadows[2],
			cursor: 'pointer'
		}
	},
	blue: {
		color: '#1a73e8',
		transition: '1s all infinite',
		cursor: 'pointer'
	},
	radio: {
		"&:hover": {
			color: '#1a73e8',
			transition: '0.5s all infinite',
			cursor: 'pointer'
		}
	}
})