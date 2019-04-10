import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../redux/actions/todoActions';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import InputBase from '@material-ui/core/InputBase';

class AddTask extends React.PureComponent{

	constructor(props){
		super(props);
		this.state = {
			text: ''
		}
	}

	handleChange = (name) => (event) => {
		this.setState({
			[name]: event.target.value
		});
	}

	addTask = () => {
		this.props.addTodo(this.state.text, '', this.props.fromBoard);
		this.setState({
			text: ''
		});
	}

	keyPressed = (event) => {
		if (event.key === "Enter") {
			this.addTask();
		}
	}

	render(){
		return(
			<Paper className="inputBox" elevation={1}>
				<InputBase 
					autoFocus
					placeholder="Add Task"
					value={this.state.text}
					className="input"
					onChange={this.handleChange('text')}
					onKeyPress={ e => this.keyPressed(e)}
					fullWidth
				/>
				<IconButton className="iconButton" onClick={this.addTask.bind(this)}>
					<AddIcon />
				</IconButton>
			</Paper>
		)
	}
}

export default connect(null, {addTodo})(AddTask);