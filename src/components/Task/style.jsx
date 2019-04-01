export const styles = theme => ({
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightBold,
		color: theme.palette.primary.contrastText
	},
	summary: {
		background: theme.palette.primary.main
	}
})