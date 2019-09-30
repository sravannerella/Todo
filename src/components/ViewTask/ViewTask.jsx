import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, IconButton, TextField } from '@material-ui/core';
import { addStyles } from '../../hoc';
import { styles } from './styles';
import { Close } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { SubTasks } from '../../containers';
import { LabelChip } from '../../elements';
import { Attachments } from '..';

class ViewTask extends React.Component{

    static propTypes = {
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
        task: PropTypes.object.isRequired
    }

    state = {
        clicked: false,
        description: ''
    }

    toggleClick = () => {
        const {clicked} = this.state;

        this.setState({
            clicked: !clicked
        })
    }

    showUpdate = () => {
        console.log("UPDATED"); 
    }

    componentDidMount(){
        const {task} = this.props;
        this.setState({
            description: task.description
        });
    }

    render(){
        const {classes, open, onClose, task} = this.props;
        const { clicked, description } = this.state;

        return(
            <>
                <Dialog open={open} onClose={onClose}>
                    <DialogTitle disableTypography>
                        <Typography variant="h6" className={classes.overflow}>{task.title}</Typography>
                        <IconButton aria-label="close" onClick={onClose} className={classes.closeButton}>
                            <Close />
                        </IconButton>
                    </DialogTitle>
                    
                    <DialogContent className={classes.content} dividers>
                        <div className={classes.horizontal}>
                            <div className={classes.item}>
                                <LabelChip title="Assigned To:" color="primary" chipName={task.assignedTo} onClick={this.showUpdate} />
                            </div>

                            <div id="priority" className={classes.item}>
                                <LabelChip title="Priority" onClick={this.showUpdate} chipName="High" />
                            </div>

                            <div id="due" className={classes.item}>
                                <LabelChip title="Due Date:" variant="outlined" onClick={this.showUpdate} chipName={task.dueDate} />
                            </div>
                        </div>
                        
                        <div className={classes.mb1}>
                            <Typography variant="subtitle2">Description:</Typography>
                            <TextField onBlur={this.toggleClick} className={clicked ? classes.w100 : classes.hidden } 
                                    variant="outlined" 
                                    multiline 
                                    rowsMax="4" 
                                    InputProps={{
                                        classes: {
                                            root: classes.desc,
                                            input: classes.descField
                                        }
                                    }}
                                    value={description} />
                            <div onClick={this.toggleClick} className={clicked ? classes.hidden : classes.description}>
                                <Typography variant="caption">{task.description}</Typography>
                            </div>
                        </div>

                        <div className={classes.mb1}>
                            <Typography variant="subtitle2" className={classes.mb1}>Sub Tasks:</Typography>                            
                            <SubTasks taskId={task.id} />
                        </div>

                        <div className={classes.mb1}>
                            <Typography variant="subtitle2">Attachments</Typography>
                            <Attachments />
                        </div>

                        {/* <div className={classes.mb1}>
                            <Typography variant="subtitle2">Comments</Typography>
                        </div> */}
                        
                    </DialogContent>
                </Dialog>
            </>
        );
    }
}

export default addStyles(ViewTask, styles);