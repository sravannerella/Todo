import React from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { styles } from './style';
import {withStyles} from '@material-ui/core/styles';

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
					<ExpansionPanel key={item.id}>
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