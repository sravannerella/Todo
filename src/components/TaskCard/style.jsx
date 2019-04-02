export const styles = theme => ({
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightBold,
		// color: theme.palette.primary.contrastText
	},
	task: {
		'&:hover': {
			boxShadow: theme.shadows[3]
		}
	},
	summary: {
		// background: theme.palette.primary.main
		// flexDirection: 'column'
	},
	success: {
		fontWeight: 'bold',
		color: '#3CAB5A',
		'&:hover': {
			background: '#c8e6c9'
		}
	},
	danger: {
		fontWeight: 'bold',
		color: '#f44336',
		'&:hover': {
			background: '#ffcdd2'
		}
	},
	textSuccess: {
		color: '#3CAB5A',
	},
	textDanger: {
		color: '#f44336'
	},
	center: {
		justifyContent: 'center'
	}
})