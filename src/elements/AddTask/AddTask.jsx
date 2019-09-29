import React from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import {Add} from '@material-ui/icons';
import {styles} from './styles';
import { addStyles } from '../../hoc';

class AddTask extends React.Component{
    render(){
        const {classes} = this.props;

        return (
            <>
                <Paper className={classes.inputBox} elevation={1}>
                    <InputBase 
                        autoFocus
                        placeholder="Add Task"
                        className={classes.input}
                        fullWidth
                    />
                    <IconButton className={classes.btn}>
                        <Add />
                    </IconButton>
                </Paper>
            </>
        )
    }
}

export default addStyles(AddTask, styles);