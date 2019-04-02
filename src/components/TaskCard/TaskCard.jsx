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
		console.log("PROPS:", props);
		this.classes = props.classes;
	}

	render(){
		return (
			<>
			{this.props.obj.map((item) => {
				return (
					<ExpansionPanel className={this.classes.task} key={item.id}>
						<ExpansionPanelSummary className={this.classes.summary}>
							<Typography className={this.classes.heading}>
								{item.text}
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								{item.more}
							</Typography>
						</ExpansionPanelDetails>
						<Divider />
						<ExpansionPanelActions className={this.classes.center}>
							<Button size="small" className={this.classes.success}>
								<DoneIcon className={this.classes.textSuccess}></DoneIcon>
								Done
							</Button>
							<Button size="small" className={this.classes.danger}>
								<DeleteIcon className={this.classes.textDanger}></DeleteIcon>
								Remove
							</Button>
						</ExpansionPanelActions>
					</ExpansionPanel>
				)
			})}
			</>
		)
	}
}

Task.propTypes = {
	obj: PropTypes.array.isRequired
}

export default withStyles(styles, {withTheme: true})(Task);