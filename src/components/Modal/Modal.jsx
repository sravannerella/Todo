import React from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import List from  '@material-ui/icons/List';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import { styles } from './style';
import {withStyles} from '@material-ui/core/styles';
import {toggleModal} from '../../redux/actions/visibilityActions';
import {addTodo, updateTodo} from '../../redux/actions/todoActions';

class Modal extends React.PureComponent{
	
	constructor(props){
		super(props);
		this.classes = props.classes;
		this.state = {
			open: false,
			text: '',
			more: '',
			board: '',
			boards: [{board: 'Board 1', id: 1}, {board: 'My Tasks', id: 2}, {board: "Avengers", id: 3}]
		}
	}

	componentWillReceiveProps(props){
		this.setState({
			open: props.open,
			text: props.text,
			more: props.more,
			board: props.board,
			id: props.id,
			isEdit: props.isEdit
		});
	}

	handleChange = name => (event) => {
		this.setState({
			[name]: event.target.value
		})
	}

	updateTask(){
		this.props.updateTodo(this.state.text, this.state.more, this.state.board, this.state.id);
		this.props.toggleModal(this.state.open);
	}

	addTask(){
		this.props.addTodo(this.state.text, this.state.more, this.state.board);
		this.props.toggleModal(this.state.open);
	}

	cancel(){
		this.props.toggleModal(this.state.open);
	}

	render(){
		return(
			<Dialog open={this.state.open}>
				<DialogTitle>Create Task</DialogTitle>
				<DialogContent>
					<TextField autoFocus className={this.classes.input} label="Enter title" value={this.state.text || ''} onChange={this.handleChange('text')} InputLabelProps={{shrink: true}} fullWidth></TextField>
					<TextField multiline className={this.classes.input} label="Add details" value={this.state.more || ''} onChange={this.handleChange('more')} InputLabelProps={{shrink: true}} fullWidth></TextField>
					<TextField select 
								className={this.classes.board} 
								label="Select board" 
								onChange={this.handleChange('board')} 
								value={this.state.board || ''}
								InputProps={{
									startAdornment: <InputAdornment position="start"><List /></InputAdornment>
								}}
							>
						{this.state.boards.map(item => {
							return(
								<MenuItem key={item.id} value={item.board}>{item.board}</MenuItem>
							)
						})}
					</TextField>
				</DialogContent>
				<DialogActions>
					<Button color="secondary" onClick={this.cancel.bind(this)}>Cancel</Button>
					{ (this.state.isEdit !== true) ? <Button color="primary" onClick={this.addTask.bind(this)}>Add</Button> : <Button color="primary" onClick={this.updateTask.bind(this)}>Update</Button>}

				</DialogActions>
			</Dialog>
		)
	}
}

const mapStateToProps = (state) => ({
	open: state.visibilityReducer.open,
	text: state.visibilityReducer.text,
	more: state.visibilityReducer.more,
	board: state.visibilityReducer.board,
	id: state.visibilityReducer.id,
	isEdit: state.visibilityReducer.isEdit
});

export default connect(mapStateToProps, {toggleModal, addTodo, updateTodo})(withStyles(styles, {withTheme: true})(Modal));