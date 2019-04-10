import React from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
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

	keyPressed(e){
		if(e.key === "Enter"){
			e.preventDefault();
			this.props.addSubTask(this.state.text, this.state.board, this.state.todoId);
			this.setState({
				text: ''
			})
		}
	}

	render() {
		return(
			<TextField multiline autoFocus fullWidth value={this.state.text} onChange={this.handleChange('text')} onKeyPress={ e => this.keyPressed(e)} placeholder="Add Sub Task" />
		);
	}

}

export default connect(null, {addSubTask})(AddSubTask)