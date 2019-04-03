import React from 'react';
import PropTypes from 'prop-types';
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
import Edit from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

class Tasks extends React.PureComponent{

	constructor(props){
		super(props);
		this.classes = props.classes;
		// this.sortByBoard();
		this.state = {
			obj: {}
		}
	}

	componentWillReceiveProps(props){
		this.sortByBoard(props);
	}

	sortByBoard(props){
		let obj = props.obj;
		let output = {};
		obj.forEach((item) => {
			if(output[item.board] === undefined){
				output[item.board] = [item];
			} else {
				output[item.board].push(item);
			}
		});
		this.setState({
			obj: output
		});
	}

	markDone(id){
		this.props.toggleTodo(id);
	}

	editTask(board, id){
		console.log("GOT ID:", this.state.obj[board]);
		let obj = this.state.obj[board].filter((item) => item.id === id);
		obj = obj[0];
		this.props.editModal(obj.text, obj.more, board, id);
	}

	render(){
		return (
			<>
				<List className={this.classes.list}>
					{Object.keys(this.state.obj).map((board, i) => {
						return (
							<div className={this.classes.board} key={i}>
								<h1 className={this.classes.boardHeading}>{board}</h1>
								{this.state.obj[board].map((item) => {
									return(
										<ListItem className={this.classes.item} key={item.id}>
											<ListItemIcon onClick={this.markDone.bind(this, item.id)}>
												{(item.completed ) ? <DoneIcon className={this.classes.blue}></DoneIcon> : <RadioButtonUncheckedIcon className={this.classes.radio}></RadioButtonUncheckedIcon>}
											</ListItemIcon>
											<ListItemText key={item.id} primary={item.text} secondary={item.more}></ListItemText>
											<ListItemSecondaryAction>
												<IconButton aria-label="Delete" onClick={this.editTask.bind(this, board, item.id)}>
													<Edit></Edit>
												</IconButton>
											</ListItemSecondaryAction>
										</ListItem>
									)
								})}
							</div>
						)
					})}
				</List>
			</>
		)
	}
}

Tasks.propTypes = {
	obj: PropTypes.array.isRequired
}

const mapDispatchToProps = (dispatch) => ({
	toggleTodo: (id) => dispatch({type: "TOGGLE_TODO", id}),
	editModal: (text, more, board, id) => dispatch({type: "EDIT_MODAL", open: false, text, more, board, id})
});

export default connect(null, mapDispatchToProps)(withStyles(styles, {withTheme: true})(Tasks));