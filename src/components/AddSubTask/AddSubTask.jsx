import React from 'react';
import {connect} from 'react-redux';
// import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import InputBase from '@material-ui/core/InputBase';
import { addSubTask } from '../../redux/actions/subTaskActions';

class AddSubTask extends React.PureComponent{

	constructor(props){
		super(props);
		this.state = {
			text: '',
			board: props.board,
			todoId: props.todoId
		}
	}

	handleChange = (name) => (event) => {
		this.setState({
			[name]: event.target.value
		});
	}

	addSubTask(){
		this.props.addSubTask(this.state.text, this.state.board, this.state.todoId);
		this.setState({
			text: ''
		});
	}

	keyPressed(e){
		if(e.key === "Enter"){
			e.preventDefault();
			this.addSubTask();
		}
	}

	render() {
		return(
			<Paper className="inputBox" elevation={1}>
				<InputBase 
					autoFocus
					multiline
					placeholder="Add Sub Task"
					value={this.state.text}
					className="input"
					onChange={this.handleChange('text')}
					onKeyPress={ e => this.keyPressed(e)}
					fullWidth
				/>
				<IconButton className="iconButton" onClick={this.addSubTask.bind(this)}>
					<AddIcon />
				</IconButton>
			</Paper>
		);
	}

}

export default connect(null, {addSubTask})(AddSubTask)