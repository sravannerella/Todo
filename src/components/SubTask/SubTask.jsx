import React from 'react';
import {connect} from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { getSubTask, updateSubTask, toggleSubTask} from '../../redux/actions/subTaskActions';
import AddSubTask from '../AddSubTask/AddSubTask';

class SubTask extends React.PureComponent{

	constructor(props){
		super(props);
		this.state = {
			subTasks: [],
			board: props.board,
			id: props.id
		}
	}

	componentWillReceiveProps(props){
		console.log("GOT PROPS:", props);
		this.setState({
			subTasks: props.subTasks,
			id: props.id
		});
	}

	toggleComplete(id){
		this.props.toggleSubTask(id, this.state.board);
	}

	render(){
		return(
			<>
				<FormGroup>
					{this.state.subTasks.map((task) => {
						return (
							<FormControlLabel key={task.id} control={
								<Checkbox checked={task.completed} onChange={this.toggleComplete.bind(this,task.id)} value={task.text}/>
							} label={task.text} />
						);
					})}
					<AddSubTask todoId={this.state.id} board={this.state.board || ''} />
				</FormGroup>
			</>
		)
	}

}

const mapStateToProps = (state) => ({
	subTasks: state.subTaskReducer
});

export default connect(mapStateToProps, {getSubTask, updateSubTask, toggleSubTask})(SubTask);