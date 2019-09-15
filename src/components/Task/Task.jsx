import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import {Skeleton} from '@material-ui/lab';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { addStyles } from '../../hoc';

class Task extends React.Component{

    static propTypes = {
        isLoading: PropTypes.bool,
        title: PropTypes.string.isRequired,
        showTask: PropTypes.func
    }

    render(){
        const {classes, isLoading, title, showTask} = this.props;
        return(
            <>
                <Card className={classes.card} draggable onClick={showTask}>
                    <CardContent>
                        
                        {isLoading && <>
                            <Skeleton variant="rect" className={classes.smallBreak} />
                            <Skeleton variant="rect" />
                        </> }

                        {!isLoading && <>
                            <Typography variant="subtitle1">
                                {title}
                            </Typography>
                            <Typography variant="caption">
                                Task Description
                            </Typography>
                        </> }
                    </CardContent>
                </Card>
            </>
        );
    }
}

export default addStyles(Task, styles);