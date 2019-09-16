import React from 'react';
import { Paper, FormControlLabel, Checkbox, Typography } from '@material-ui/core';
import { addStyles } from '../../hoc';
import {styles} from './styles';

class SubTask extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <>
                <Paper className={classes.p1}>
                    <FormControlLabel className={classes.formText} 
                            control={<Checkbox color="primary" className={classes.checkBox} />} 
                            label={
                                <Typography className={classes.fontSm}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aliquam doloremque maxime!
                                </Typography>} />
                </Paper>
            </>
        );
    }
}

export default addStyles(SubTask, styles);