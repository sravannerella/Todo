import React from 'react';
import { styles } from './style';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {withStyles} from '@material-ui/core/styles';

class Header extends React.PureComponent{

	classes = {};

	constructor(props){
		super(props);
		this.classes = props.classes;
	}

	render(){
		return(
			<AppBar className={this.classes.appBar}>
				<Toolbar>
					<Typography variant='h6'>
						TODO
					</Typography>
				</Toolbar>
			</AppBar>
		)
	}
}

export default withStyles(styles, {withTheme: true})(Header);