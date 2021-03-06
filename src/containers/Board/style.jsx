export const styles = theme => ({
	boardSize: {
		padding: 5
	},
	fab: {
		margin: theme.spacing.unit,
		background: theme.palette.primary.contrastText,
		boxShadow: theme.shadows[1],
		'&:hover': {
			background: theme.palette.grey["50"],
			boxShadow: theme.shadows[3]
		}
	},
	input: {
		marginLeft: 8,
		flex: 1
	},
	iconButton: {
		padding: 10
	},
	inputBox: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: 400
	},
	list: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	board: {
		margin: '0 10px',
		width: 300,
		borderTopWidth: 6,
		borderTopStyle: 'solid',
		borderTopColor: theme.palette.primary.main,
		borderTopLeftRadius: 2,
		borderTopRightRadius: 2
	},
	boardHeading: {
		fontSize: 18,
		paddingLeft: 10
	},
	center: {
		display: 'flex',
		justifyContent: 'center'
	}
})