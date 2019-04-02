import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import { styles } from './style';
import {withStyles} from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from 'react-redux';

class Tasks extends React.PureComponent{

	constructor(props){
		super(props);
		this.classes = props.classes;
		this.state = {
			checked: []
		}
	}

	toggle(id, val){
		const {checked} = this.state;
		const newChecked = [...checked];
		if(val && newChecked.indexOf(id) === -1){
			newChecked.push(id);
		} else{
			newChecked.splice(newChecked.indexOf(id), 1);
		}
		this.setState({
			checked: newChecked
		});
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
								<ListItemIcon onClick={this.markDone.bind(this, item.id)} onMouseLeave={this.toggle.bind(this, item.id, false)} onMouseEnter={this.toggle.bind(this, item.id, true)}>
									{(item.completed || (this.state.checked.indexOf(item.id) !== -1) ) ? <DoneIcon className={this.classes.blue}></DoneIcon> : <RadioButtonUncheckedIcon></RadioButtonUncheckedIcon>}
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