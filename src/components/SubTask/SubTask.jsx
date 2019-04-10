import React from 'react';
import {connect} from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { getSubTask, updateSubTask, deleteSubTask, toggleSubTask} from '../../redux/actions/subTaskActions';
import AddSubTask from '../AddSubTask/AddSubTask';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

class SubTask extends React.PureComponent{

	constructor(props){
		super(props);
		this.state = {
			subTasks: props.subTasks,
			board: props.board,
			id: props.id
		}
	}

	componentWillReceiveProps(props){
		this.setState({
			subTasks: props.subTasks,
			board: props.board,
			id: props.id
		});
	}

	toggleComplete(id){
		this.props.toggleSubTask(id, this.state.board);
	}

	deleteSubTask(id){
		this.props.deleteSubTask(id);
	}

	render(){
		return(
			<>
				{/* <FormGroup>
					{this.state.subTasks.map((task) => {
						return (
							<FormControlLabel key={task.id} control={
								<Checkbox checked={task.completed} className={ (task.completed) ? 'animate' : 'removeAnimate'} onChange={this.toggleComplete.bind(this,task.id)} value={task.text}/>
							} label={task.text} />
						);
					})}
					<AddSubTask todoId={this.state.id} board={this.state.board || ''} />
				</FormGroup> */}
				<List>
					{this.state.subTasks.map((task) => {
						return (
							<ListItem key={task.id} className="list">
								<ListItemIcon>
									<Checkbox checked={task.completed} className={ (task.completed) ? 'animate' : 'removeAnimate'} onChange={this.toggleComplete.bind(this,task.id)} value={task.text}/>
								</ListItemIcon>
								<ListItemText primary={task.text}>{task.text}</ListItemText>
								<ListItemSecondaryAction onClick={this.deleteSubTask.bind(this, task.id)} className="secondaryAction">
									<IconButton>
										<Delete />
									</IconButton>
								</ListItemSecondaryAction>
							</ListItem>
						);
					})}
				</List>
				<AddSubTask todoId={this.state.id} board={this.state.board || ''} />
			</>
		)
	}

}

// const mapStateToProps = (state) => ({
// 	subTasks: state.subTaskReducer
// });

export default connect(null, {getSubTask, deleteSubTask, updateSubTask, toggleSubTask})(SubTask);