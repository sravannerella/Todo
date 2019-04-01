import React from 'react';
import { styles } from './style';
import {withStyles} from '@material-ui/core/styles';
import Task from '../Task/Task';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {connect} from 'react-redux';

class Board extends React.PureComponent{

	constructor(props){
		super(props);
		console.log("GOT PROPS DISPTACH:", props);
		this.classes = props.classes;
		this.state = {
			todos: []
		}
	}

	componentWillReceiveProps(props){
		console.log("IS PROPS: ", props);
		this.setState({
			todos: props.todos,
			more: props.more
		})
	}

	addTodo = (text, more) => {
		console.log("THIS PROPS", this.props);
		this.props.addTodo(text, more);
	}

	render(){
		return(
			<div className={this.classes.boardSize}>
				<Task obj={this.state.todos} />
				<div className={this.classes.center}>
					<Fab variant="extended" aria-label="Add" className={this.classes.fab} onClick={this.addTodo.bind(this,"NEW WORLD", "hello")}>
						<AddIcon color="primary" /> Add task
					</Fab>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	todos: state.todoReducer
});

const mapDispatchToProps = (dispatch) => ({
	toggleTodo: (id) => dispatch({type: "TOGGLE_TODO",id}),
	addTodo: (text, more) => dispatch({type: "ADD_TODO", text, more})
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(Board));