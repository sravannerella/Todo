import React from 'react';
import { Dialog, DialogTitle, DialogContent, Chip, Typography, Avatar } from '@material-ui/core';
import { addStyles } from '../../hoc';
import { styles } from './styles';

class ViewTask extends React.Component{

    state = {
        open: true
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    render(){
        const {classes} = this.props;
        const {open} = this.state;
        
        return(
            <>
                <Dialog open={open} onClose={this.handleClose.bind(this)}>
                    <DialogTitle>
                        <Typography variant="h6">Task Title</Typography>
                    </DialogTitle>
                    <DialogContent className={classes.content} dividers>
                        <div className={classes.mb1}>
                            <Typography variant="subtitle2">Assigned To:</Typography>
                            <Chip variant="default" avatar={<Avatar>MB</Avatar>} className={classes.chip} color="primary" label="Mahesh Babu" />
                        </div>

                        <div id="tags" className={classes.mb1}>
                            <Typography variant="subtitle2">Tags:</Typography>
                            <div className={classes.tags}>
                                <Chip variant="outlined" onDelete={this.handleClose.bind(this)} className={classes.chip} label="TodoList" />
                            </div>
                        </div>
                        
                        <div className={classes.mb1}>
                            <Typography variant="subtitle2">Description:</Typography>
                            <Typography variant="caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repellat, animi vel quibusdam ut consequuntur doloremque molestias error possimus corporis dolores quis ab illo, sequi eligendi saepe rerum sapiente repellendus.</Typography>
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