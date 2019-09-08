import { withStyles } from "@material-ui/core";
import {connect} from 'react-redux';

export const connectWithStyles = (component, styles, mapStateToProps, dispatchProps) => {
    return connect( mapStateToProps, dispatchProps)(withStyles(styles, {withTheme: true})(component));
}