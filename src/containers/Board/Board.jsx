import React from 'react';
import { styles } from './style';
import {withStyles} from '@material-ui/core/styles';
import Tasks from '../../components/Tasks/Tasks';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {connect} from 'react-redux';
import Modal from '../../components/Modal/Modal';
import {toggleModal} from '../../redux/actions/visibilityActions';
import {toggleTodo} from '../../redux/actions/todoActions';

class Board extends React.PureComponent{

	constructor(props){
		super(props);
		this.classes = props.classes;
		this.state = {
			todos: [],
			open: false
		}
	}

	componentWillReceiveProps(props){
		this.setState({
			todos: props.todos,
			more: props.more,
			board: props.board,
			open: props.open
		})
	}

	showModal = () => {
		this.props.toggleModal(this.state.open);
	}

	render(){
		return(
			<>
				<div className={this.classes.boardSize}>
					<Modal />
					<Tasks obj={this.state.todos} />
				</div>
				<div className={this.classes.center}>
					<Fab variant="extended" aria-label="Add" className={this.classes.fab} onClick={this.showModal.bind(this)}>
						<AddIcon color="primary" /> Add task
					</Fab>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	todos: state.todoReducer,
	visibility: state.visibilityReducer
});

export default connect(mapStateToProps, { toggleTodo, toggleModal })(withStyles(styles, {withTheme: true})(Board));