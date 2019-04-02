import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { styles } from './style';
import {withStyles} from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import {connect} from 'react-redux';

class Tasks extends React.PureComponent{

	constructor(props){
		super(props);
		this.classes = props.classes;
	}

	markDone(id){
		this.props.toggleTodo(id);
	}

	render(){
		return (
			<>
				<List>
					{this.props.obj.map((item) => {
						return (
							<ListItem className={this.classes.item} key={item.id}>
								<ListItemIcon onClick={this.markDone.bind(this, item.id)}>
									{(item.completed ) ? <DoneIcon className={this.classes.blue}></DoneIcon> : <RadioButtonUncheckedIcon className={this.classes.radio}></RadioButtonUncheckedIcon>}
								</ListItemIcon>
								<ListItemText primary={item.text} secondary={item.more}></ListItemText>
							</ListItem>
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
	toggleTodo: (id) => dispatch({type: "TOGGLE_TODO", id})
});

export default connect(null, mapDispatchToProps)(withStyles(styles, {withTheme: true})(Tasks));