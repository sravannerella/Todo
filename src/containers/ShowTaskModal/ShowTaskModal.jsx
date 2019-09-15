import React from 'react';
import { connectWithStyles } from '../../hoc';
import {showTask, closeTask} from '../../redux/actions';
import { ViewTask } from '../../components';

class ShowTaskModal extends React.Component{

    componentDidMount(){
        // console.log(this.props);
    }

    handleClose = () => {
        const {closeTask} = this.props;
        closeTask();
    }

    render(){
        const {ShowTaskReducer: {open, task}} = this.props;
        return (
            <ViewTask 
                open={open} 
                onClose={this.handleClose}
                task={task}
            />
        )
    }
}

const mapStateToProps = (state) => (state);

export default connectWithStyles(ShowTaskModal, null, mapStateToProps, {showTask, closeTask})