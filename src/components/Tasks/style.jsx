export const styles = theme => ({
	item: {
		'&:first-child': {
			borderTopLeftRadius: 5,
			borderTopRightRadius: 5,
		},
		'&:last-child': {
			borderBottomLeftRadius: 5,
			borderBottomRightRadius: 5,
		},
		borderWidth: 1,
		borderTopWidth: 0.5,
		borderStyle: 'solid',
		borderColor: '#dadce0',
		'&:hover': {
			boxShadow: theme.shadows[2],
			zIndex: 2000
		}
	},
	blue: {
		color: '#1a73e8'
	}
})