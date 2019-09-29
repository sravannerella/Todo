import React from 'react';
import { connectWithStyles } from '../../hoc';
import {Task} from '../../components';
import {styles} from './styles';
import { Typography, Chip } from '@material-ui/core';
import {getTodos, showTask, addToTasks} from '../../redux/actions';
import { AddTask } from '../../elements';

class Board extends React.Component{

    updateTaskBoard = (e) => {
        console.log(e);
    }

    dragged = (e) => {
        e.stopPropagation();
        e.preventDefault();
    }

    viewTaskDetails = (task, _) => {
        const {showTask} = this.props;
        showTask(task);
    }

    componentDidMount(){
        const {getTodos} = this.props;
        getTodos();
    }

    addTask = (text, boardId) => {
        const {addToTasks} = this.props;
        addToTasks(text, boardId);
    }

    render(){
        const {classes, payload, loading} = this.props;
        const payloadLength = payload && payload.length;

        return(
            <div className={classes.container} 
                onDragOver={this.dragged.bind(this)} 
                onDrop={this.updateTaskBoard.bind(this)}>
                
                <div className={classes.headerContainer}>
                    <div className={classes.heading}>
                        <Typography variant="subtitle1">Todo Tasks</Typography>
                        <Chip label={payloadLength} variant="default" color="primary" className={classes.chip} />
                    </div>
                    <AddTask onSubmit={this.addTask}/>
                </div>
                

                { loading && <div>
                    <Task isLoading={loading} title="Loading" />
                    <Task isLoading={loading} title="Loading" />
                </div>}
                
                { (!loading && payloadLength === 0) && <Typography variant="subtitle2">Yay! No Tasks.</Typography> }

                <div className={classes.tasks}>
                    <div className={classes.overflow}>
                        { 
                            payloadLength > 0 && 
                            payload.map((item, index) => <Task isLoading={loading} 
                                                                key={index} 
                                                                title={item.title} 
                                                                description={item.description}
                                                                showTask={this.viewTaskDetails.bind(this, item)} 
                                                        />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({GetTodosReducer, TasksReducer}) => ({...GetTodosReducer, TasksReducer});

export default connectWithStyles(Board, styles, mapStateToProps, {getTodos, showTask, addToTasks});