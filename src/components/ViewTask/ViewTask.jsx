import React from 'react';
import { Dialog, DialogTitle, DialogContent, Chip, Typography, Avatar, IconButton } from '@material-ui/core';
import { addStyles } from '../../hoc';
import { styles } from './styles';
import { Close } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { SubTasks } from '../../containers';

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
                        <Typography variant="h6">{task.title}</Typography>
                        <IconButton aria-label="close" onClick={onClose} className={classes.closeButton}>
                            <Close />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent className={classes.content} dividers>
                        <div className={classes.mb1}>
                            <Typography variant="subtitle2">Assigned To:</Typography>
                            <Chip variant="default" 
                                onClick={this.showUpdate.bind(this)} 
                                avatar={<Avatar>MB</Avatar>} 
                                className={classes.chip} 
                                color="primary" label="Mahesh Babu" />
                        </div>

                        <div id="tags" className={classes.mb1}>
                            <Typography variant="subtitle2">Tags:</Typography>
                            <div className={classes.tags}>
                                <Chip variant="outlined" 
                                    onClick={this.showUpdate.bind(this)}
                                    onDelete={onClose} 
                                    className={classes.chip} label="TodoList" />
                            </div>
                        </div>
                        
                        <div className={classes.mb1}>
                            <Typography variant="subtitle2">Description:</Typography>
                            <Typography variant="caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repellat, animi vel quibusdam ut consequuntur doloremque molestias error possimus corporis dolores quis ab illo, sequi eligendi saepe rerum sapiente repellendus.</Typography>
                        </div>

                        <div className={classes.mb1}>
                            <Typography variant="subtitle2">Sub Tasks:</Typography>                            
                            <SubTasks />
                        </div>

                        <div className={classes.mb1}>
                            <Typography variant="subtitle2">Attachments</Typography>
                        </div>
                    </DialogContent>
                </Dialog>
            </>
        );
    }
}

export default addStyles(ViewTask, styles);