import React from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import {Add} from '@material-ui/icons';
import {styles} from './styles';
import { addStyles } from '../../hoc';
import PropTypes from 'prop-types';

class AddTask extends React.Component{

    state = {
        text: ''
    }

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    handleChange = (name) => (event) => {
		this.setState({
			[name]: event.target.value
		});
	}

    keyPressed = (event) => {
        const {text} = this.state;
		if (event.key === "Enter" && text.trim() !== '') {
			this.addTask();
		}
    }
    
    addTask = () => {
        const {onSubmit} = this.props;
        const { text } = this.state;
        onSubmit(text, 1);
        this.setState({
            text: ''
        });
    }

    render(){
        const {classes} = this.props;
        const {text} = this.state;

        return (
            <>
                <Paper className={classes.inputBox} elevation={1}>
                    <InputBase 
                        autoFocus
                        placeholder="Add Task"
                        onChange={this.handleChange('text')}
                        value={text}
                        onKeyPress={ e => this.keyPressed(e)}
                        className={classes.input}
                        fullWidth
                    />
                    <IconButton onClick={this.addTask} className={classes.btn}>
                        <Add />
                    </IconButton>
                </Paper>
            </>
        )
    }
}

export default addStyles(AddTask, styles);