export const styles = (theme) => ({
    container: {
        width: 300,
        height: '100%',
        padding: '1rem',
        // background: theme.palette.secondary[50]
        background: theme.palette.primary[50],
        borderRadius: 5,
        margin: '1rem',
        overflow: 'scroll',
        maxHeight: 'calc(100vh - 200px)'
    },
    heading: {
        display: 'flex',
        marginBottom: '1rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: -16,
        margin: '0 -10px',
        padding: 10,
        background: theme.palette.primary[50],
        borderRadius: 5,
        transition: 'all 0.2s ease-in-out'
    },
    footer: {
        position: 'sticky',
        background: theme.palette.primary[50],
        padding: 10,
        bottom: -16,
        margin: '5px -10px'
    },
    addTask: {
        width: '100%',
        borderRadius: theme.spacing(2)
    }
})