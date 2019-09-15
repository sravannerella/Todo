import React from 'react';
import { connectWithStyles } from '../../hoc';
import {Task} from '../../components';
import {styles} from './styles';
import { Typography, Chip, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import {getTodos, showTask} from '../../redux/actions';

class Board extends React.Component{

    updateTaskBoard = (e) => {
        console.log(e);
    }

    dragged = (e) => {
        e.stopPropagation();
        e.preventDefault();
    }

    viewTaskDetails = (task, event) => {
        const {showTask} = this.props;
        showTask(task);
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

                { loading && <div>
                    <Task isLoading={loading} title="Loading" />
                    <Task isLoading={loading} title="Loading" />
                </div>}
                
                { (!loading && payloadLength === 0) && <Typography variant="subtitle2">Yay! No Tasks.</Typography> }

                <div className={classes.tasks}>
                    { 
                        payloadLength > 0 && 
                        payload.map((item, index) => <Task isLoading={loading} 
                                                            key={index} 
                                                            title={item.title} 
                                                            showTask={this.viewTaskDetails.bind(this, item)} 
                                                    />)
                    }
                </div>
                
                <div className={classes.footer}>
                    <Button className={classes.addTask}>
                        <Add />
                        Add Task
                    </Button>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = ({GetTodosReducer}) => ({...GetTodosReducer});

export default connectWithStyles(Board, styles, mapStateToProps, {getTodos, showTask});