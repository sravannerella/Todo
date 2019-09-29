export const styles = (theme) => ({
    content: {
        minWidth: 600
    },
    mb1: {
        marginBottom: '1rem'
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
    },
    descField: {
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: '1.66',
        letterSpacing: '0.03333em'
    },
    desc: {
        padding: 8
    },
    w100: {
        width: '100%',
        minHeight: 50
    },
    description: {
        minHeight: 50,
        padding: 8,
        borderRadius: 8,
        '&:hover': {
            background: theme.palette.primary[50]
        }
    },
    hidden: {
        display: 'none',
        visibility: 'hidden'
    }
})