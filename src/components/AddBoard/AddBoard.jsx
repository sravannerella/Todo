import React from 'react';
import { connect } from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import { styles } from './style';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import {createBoard} from '../../redux/actions/boardActions';
import {toggleBoard} from '../../redux/actions/visibilityActions';

class AddBoard extends React.PureComponent{

	constructor(props){
		super(props);
		this.classes = props.classes;
		this.state = {
			name: '',
			boardOpen: false,
			isEdit: false
		}
	}

	componentWillReceiveProps(props){
		console.log("AddBoard: ", props);
		this.setState({
			boardOpen: props.boardOpen,
			name: ''
		});
	}

	handleChange = name => (event) => {
		this.setState({
			[name]: event.target.value
		})
	}

	addBoard() {
		this.props.createBoard(this.state.name);
		this.props.toggleBoard(this.state.boardOpen);
	}

	cancel(){
		this.props.toggleBoard(this.state.boardOpen);
	}

	render(){
		return(
			<Dialog open={this.state.boardOpen} >
				<DialogTitle>Create Board</DialogTitle>
				<DialogContent>
					<TextField autoFocus className={this.classes.input} label="Board Name" value={this.state.name || ''} onChange={this.handleChange('name')} InputLabelProps={{shrink: true}} fullWidth></TextField>
				</DialogContent>
				<DialogActions>
					<Button color="secondary" onClick={this.cancel.bind(this)}>Cancel</Button>
					{ (this.state.isEdit !== true) ? <Button color="primary" onClick={this.addBoard.bind(this)}>Add</Button> : <Button color="primary" onClick={this.updateTask.bind(this)}>Update</Button>}
				</DialogActions>
			</Dialog>
		)
	}

}

const mapStateToProps = (state) => ({
	boardOpen: state.visibilityReducer.boardOpen
});

export default connect(mapStateToProps, {toggleBoard, createBoard})(withStyles(styles, {withTheme: true})(AddBoard));