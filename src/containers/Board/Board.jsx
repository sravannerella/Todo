import React from 'react';
import { styles } from './style';
import {withStyles} from '@material-ui/core/styles';
// import Tasks from '../../components/Tasks/Tasks';
import AddBoard from '../../components/AddBoard/AddBoard';
import List from '@material-ui/core/List';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {connect} from 'react-redux';
// import Modal from '../../components/Modal/Modal';
// import {toggleModal} from '../../redux/actions/visibilityActions';
// import {toggleTodo} from '../../redux/actions/todoActions';
import { toggleBoard } from '../../redux/actions/visibilityActions';

class Board extends React.PureComponent{

	constructor(props){
		super(props);
		this.classes = props.classes;
		this.state = {
			boards: [],
			open: false
		}
	}

	// groupByBoard(todos){
	// 	let output = {};
	// 	todos.forEach((item) => {
	// 		if(output[item.board] === undefined){
	// 			output[item.board] = [item];
	// 		} else {
	// 			output[item.board].push(item);
	// 		}
	// 	});
	// 	return output;
	// }

	componentWillReceiveProps(props){
		console.log("BOARD: ", props);
		this.setState({
			boards: props.board
		})
	}

	showModal = () => {
		this.props.toggleBoard(this.state.open);
	}

	render(){
		return(
			<>
				<div className={this.classes.boardSize}>
					<AddBoard />
					<List className={this.classes.list}>
						{this.state.boards.map((board, i) => {
							return (
								<div className={this.classes.board} key={i}>
									<h1 className={this.classes.boardHeading}>{board.name}</h1>
								</div>
							)
						})}
					</List>
				</div>
				<div className={this.classes.center}>
					<Fab variant="extended" aria-label="Add" className={this.classes.fab} onClick={this.showModal.bind(this)}>
						<AddIcon color="primary" /> Add Board
					</Fab>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	board: state.boardReducer
});

export default connect(mapStateToProps, { toggleBoard })(withStyles(styles, {withTheme: true})(Board));