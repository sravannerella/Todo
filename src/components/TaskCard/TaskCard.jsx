import React from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { styles } from './style';
import {withStyles} from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';

class Task extends React.PureComponent{

	constructor(props){
		super(props);
		this.classes = props.classes;
	}

	render(){
		return (
			<>

			</>
		)
	}
}

export default withStyles(styles, {withTheme: true})(Task);