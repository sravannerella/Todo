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
    headerContainer: {
        position: 'sticky',
        top: -16,
        margin: '0 -10px',
        padding: 10,
        paddingTop: 0
    },
    heading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: theme.palette.primary[50],
        paddingBottom: '1rem',
        transition: 'all 0.2s ease-in-out'
    },
    addTask: {
        width: '100%',
        borderRadius: theme.spacing(2)
    },
    overflow: {
        overflow: 'scroll'
    }
})