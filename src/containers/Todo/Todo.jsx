import React from 'react';
import Header from '../../components/Header/Header';
import Board from '../../components/Board/Board';
// import Paper from '@material-ui/core/Paper';
import { styles } from './style';
import {withStyles} from '@material-ui/core/styles';

class Todo extends React.PureComponent{

	constructor(props){
		super(props);
		this.classes = props.classes;
	}

	render() {
		return(
			<>
				<Header />
				<Board />
			</>
		)
	}
}

export default withStyles(styles, {withTheme: true})(Todo);