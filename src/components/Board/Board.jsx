import React from 'react';
import { addStyles } from '../../hoc';
import {styles} from './styles';
import { Task } from '..';
import { Typography, Chip } from '@material-ui/core';

class Board extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <div className={classes.heading}>
                    <Typography variant="subtitle1">Todo Tasks</Typography>
                    <Chip label="5" variant="default" color="primary" className={classes.chip} />
                </div>
                <Task />
            </div>
        )
    }
}

export default addStyles(Board, styles);