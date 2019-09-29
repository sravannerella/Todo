import React from 'react';
import { connectWithStyles } from '../../hoc';
import { SubTask } from '../../components';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import {styles} from './styles';
import {getSubTasks} from '../../redux/actions';

class SubTasks extends React.Component{

    componentDidMount(){
        const { getSubTasks } = this.props;
        getSubTasks(1);
    }

    render(){
        const {classes, payload, loading} = this.props;
        const payloadLength = payload && payload.length;
        console.log("PAYLOAD:", payload, payloadLength, this.props);
        return (
            <>
                { loading && <SubTask isLoading={loading} description="Loading" />}
                { !loading && <div className={classes.mb1}>
                    { payloadLength > 0 && payload.map((item, index) => <SubTask key={index} isLoading={loading} subtask={item}/>) }
                </div>}
                <Button variant="text" className={classes.btn}>
                    <Add />
                    Add SubTask
                </Button>
            </>
        )
    }

}

const mapStateToProps = ({SubTasksReducer}) => ({...SubTasksReducer});

export default connectWithStyles(SubTasks, styles, mapStateToProps, {getSubTasks});