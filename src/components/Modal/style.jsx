export const styles = theme => ({
	input: {
		marginBottom: 10,
		background: '#fafafa'
	},
	board: {
		flexBasis: 200,
		display: 'flex',
		flexWrap: 'wrap',
		paddingTop: 5
	},
	iconMargin: {
		marginRight: 10
	},
	btn: {
		textTransform: 'none',
		fontWeight: 'bold',
		color: '#5f6368',
		'&:hover': {
			color: theme.palette.primary.main
		}
	}
});