import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { styles } from './styles';
import { addStyles } from '../../hoc';

class Task extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="subtitle1">
                            Task Title
                        </Typography>
                        <Typography variant="caption">
                            Task Description
                        </Typography>
                    </CardContent>
                </Card>
            </>
        );
    }
}

export default addStyles(Task, styles);