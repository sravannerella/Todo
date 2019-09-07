import { withStyles } from "@material-ui/core"

export const addStyles = (component, styles) => {
    return withStyles(styles, {withTheme: true})(component);
}