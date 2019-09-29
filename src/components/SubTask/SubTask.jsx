import React from 'react';
import { Paper, FormControlLabel, Checkbox, Typography } from '@material-ui/core';
import { addStyles } from '../../hoc';
import {styles} from './styles';
import PropTypes from 'prop-types';
import { Skeleton } from '@material-ui/lab';

class SubTask extends React.Component{

    task = {
        description: PropTypes.string.isRequired, 
        completed: PropTypes.bool.isRequired
    }

    static propTypes = {
        subtask: PropTypes.shape(this.task).isRequired,
        isLoading: PropTypes.bool
    }

    render(){
        const {classes, key, subtask, isLoading} = this.props;

        return(
            <>
                <Paper key={key} className={classes.subtask}>
                    {isLoading && <>
                            <Skeleton variant="rect" className={classes.smallBreak} />
                            <Skeleton variant="rect" />
                    </> }

                    {!isLoading && <FormControlLabel className={classes.formText} 
                            control={<Checkbox color="primary" className={classes.checkBox} checked={subtask.completed} />} 
                            label={
                                <Typography className={classes.fontSm}>
                                    {subtask.description}
                            </Typography>} /> }
                </Paper>
            </>
        );
    }
}

export default addStyles(SubTask, styles);