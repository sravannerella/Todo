import React from 'react';
import { connectWithStyles } from '../../hoc';
import {Task} from '../../components';
import {styles} from './styles';
import { Typography, Chip, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import {getTodos} from '../../redux/actions';

class Board extends React.Component{

    updateTaskBoard = (e) => {
        console.log(e);
    }

    dragged = (e) => {
        e.stopPropagation();
        e.preventDefault();
    }

    componentDidMount(){
        const {getTodos} = this.props;
        getTodos();
    }

    render(){
        const {classes, payload, loading} = this.props;
        const payloadLength = payload && payload.length;

        return(
            <div className={classes.container} 
                onDragOver={this.dragged.bind(this)} 
                onDrop={this.updateTaskBoard.bind(this)}>

                <div className={classes.heading}>
                    <Typography variant="subtitle1">Todo Tasks</Typography>
                    <Chip label={payloadLength} variant="default" color="primary" className={classes.chip} />
                </div>
                
                { (!loading && payloadLength === 0) && <Typography variant="subtitle2">Yay! No Tasks.</Typography> }

                { payloadLength > 0 && payload.map((item, index) => <Task isLoading={loading} key={index} title={item.title} />)}
                
                <Button className={classes.addTask}>
                    <Add />
                    Add Task
                </Button>
                
            </div>
        )
    }
}

const mapStateToProps = ({GetTodosReducer}) => ({...GetTodosReducer});

export default connectWithStyles(Board, styles, mapStateToProps, {getTodos});