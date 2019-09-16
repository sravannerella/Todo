import React from 'react';
import { connectWithStyles } from '../../hoc';
import { SubTask } from '../../components';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import {styles} from './styles';

class SubTasks extends React.Component{

    render(){
        const {classes} = this.props;
        return (
            <>
                <div className={classes.mb1}>
                    <SubTask />
                </div>
                <Button variant="text" className={classes.btn}>
                    <Add />
                    Add SubTask
                </Button>
            </>
        )
    }

}

export default connectWithStyles(SubTasks, styles, null, null);