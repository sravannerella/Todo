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
	list: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	blue: {
		color: '#1a73e8',
		transition: '0.5s all infinite',
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