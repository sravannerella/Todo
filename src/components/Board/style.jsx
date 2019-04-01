export const styles = theme => ({
	boardSize: {
		width: 400,
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
	center: {
		display: 'flex',
		justifyContent: 'center'
	}
})