import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { styles } from './style';
import {withStyles} from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import {connect} from 'react-redux';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { toggleTodo, deleteTodo } from '../../redux/actions/todoActions';
import { editModal } from '../../redux/actions/visibilityActions';
import Modal from '../Modal/Modal';

class Tasks extends React.PureComponent{

	constructor(props){
		super(props);
		this.classes = props.classes;
		this.state = {
			board: '',
			isFade: false,
			tasks: []
		}
	}

	filterTasksByBoard(boardName, tasks){
		let tasksForBoard = tasks.filter((task) => {
			return task.board === boardName
		});

		// tasksForBoard.sort((a,b) => a.completed - b.completed);
		return tasksForBoard;
	}

	filterTasksById(id){
		let task = this.state.tasks.filter((task) => task.id === id);
		return task[0];
	}

	componentWillReceiveProps(props){
		let tasks = this.filterTasksByBoard(props.board, props.tasks);
		this.setState({
			board: props.board,
			tasks: tasks
		})
	}

	markDone(id, e){
		e.stopPropagation();
		this.props.toggleTodo(id);
		this.setState({
			isFade: !this.state.isFade
		});
	}

	deleteTask(id){
		this.props.deleteTodo(id);
	}

	editTask(board, id){
		let obj = this.filterTasksById(id);
		this.props.editModal(obj.text, obj.more, board, id);
	}

	render(){
		return (
			<>
				<Modal />
				<List className={this.classes.list}>
					{this.state.tasks.map( (item) => {
						return (
							<ListItem className={ (item.completed) ? 'animate ' + this.classes.item : 'removeAnimate ' + this.classes.item} key={item.id} onClick={this.editTask.bind(this, this.state.board, item.id)}>
								<ListItemIcon onClick={this.markDone.bind(this, item.id)}>
									{ (item.completed) ? <DoneIcon className={this.classes.blue} /> : <RadioButtonUncheckedIcon  className={this.classes.radio} /> }
								</ListItemIcon>
								<ListItemText key={item.id} primary={item.text} secondary={item.more} />
								<ListItemSecondaryAction onClick={this.deleteTask.bind(this, item.id)} className="secondaryAction">
									<IconButton aria-label="Delete">
										<Delete />
									</IconButton>
								</ListItemSecondaryAction>
							</ListItem>
						);
					})}
				</List>
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	tasks: state.todoReducer
});

export default connect(mapStateToProps, { toggleTodo, deleteTodo, editModal })(withStyles(styles, {withTheme: true})(Tasks));