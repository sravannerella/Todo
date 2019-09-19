export const styles = (theme) => ({
    content: {
        minWidth: 500
    },
    mb1: {
        marginBottom: '1rem'
    },
    chip: {
        margin: '5px 5px 0 0'
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.grey[500]
    },
    overflow: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '90%',
        whiteSpace: 'noWrap'
    },
    horizontal: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        marginBottom: '1rem',
        width: 'calc(100%/3)'
    },
    mt1: {
        marginTop: '0.5rem'
    }
})