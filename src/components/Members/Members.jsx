import React from 'react';
import { List, ListItemAvatar, Avatar, ListItem, ListItemText } from '@material-ui/core';

class Members extends React.Component{
    render(){
        return(
            <>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>SN</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Sravan Nerella" secondary="10 Tasks pending" />
                    </ListItem>
                </List>
            </>
        )
    }
}

export default Members;