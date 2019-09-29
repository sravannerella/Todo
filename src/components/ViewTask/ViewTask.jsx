import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from '@material-ui/core';
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

    showUpdate = () => {
        console.log("UPDATED"); 
    }

    render(){
        const {classes, open, onClose, task} = this.props;
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
                                <LabelChip title="Assigned To:" color="primary" chipName="Mahesh Babu" onClick={this.showUpdate} />
                            </div>

                            <div id="priority" className={classes.item}>
                                <LabelChip title="Priority" onClick={this.showUpdate} chipName="High" />
                            </div>

                            <div id="due" className={classes.item}>
                                <LabelChip title="Due Date:" variant="outlined" onClick={this.showUpdate} chipName="September 10th, 2019" />
                            </div>
                        </div>
                        
                        <div className={classes.mb1}>
                            <Typography variant="subtitle2">Description:</Typography>
                            <Typography variant="caption">{task.description}</Typography>
                        </div>

                        <div className={classes.mb1}>
                            <Typography variant="subtitle2" className={classes.mb1}>Sub Tasks:</Typography>                            
                            <SubTasks taskId={task.id} />
                        </div>

                        <div className={classes.mb1}>
                            <Typography variant="subtitle2">Attachments</Typography>
                            <Attachments />
                        </div>

                        <div className={classes.mb1}>
                            <Typography variant="subtitle2">Comments</Typography>
                        </div>
                    </DialogContent>
                </Dialog>
            </>
        );
    }
}

export default addStyles(ViewTask, styles);