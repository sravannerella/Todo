import React from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import { styles } from './style';
import {withStyles} from '@material-ui/core/styles';

class Modal extends React.PureComponent{
	
	constructor(props){
		super(props);
		this.classes = props.classes;
		this.state = {
			open: false
		}
	}

	componentWillReceiveProps(props){
		this.setState({
			open: props.open,
			text: '',
			more: ''
		});
	}

	handleChange = name => (event) => {
		this.setState({
			[name]: event.target.value
		})
	}

	addTask(){
		this.props.addTodo(this.state.text, this.state.more);
		this.props.close(this.state.open);
	}

	cancel(){
		this.props.close(this.state.open);
	}

	render(){
		return(
			<Dialog open={this.state.open}>
				<DialogTitle>Create Task</DialogTitle>
				<DialogContent>
					<TextField autoFocus className={this.classes.input} label="Enter title" onChange={this.handleChange('text')} InputLabelProps={{shrink: true}} fullWidth></TextField>
					<TextField multiline className={this.classes.input} label="Add details" onChange={this.handleChange('more')} InputLabelProps={{shrink: true}} fullWidth></TextField>
				</DialogContent>
				<DialogActions>
					<Button color="primary" onClick={this.addTask.bind(this)}>Add</Button>
					<Button color="secondary" onClick={this.cancel.bind(this)}>Cancel</Button>
				</DialogActions>
			</Dialog>
		)
	}
}

const mapStateToProps = (state) => ({
	open: state.visibilityReducer.open
});

const mapDispatchToProps = (dispatch) => ({
	close: (open) => dispatch({type: "TOGGLE_MODAL", open}),
	addTodo: (text, more) => dispatch({type: "ADD_TODO", text, more})
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(Modal));