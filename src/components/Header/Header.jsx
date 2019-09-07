import React from 'react';
import { AppBar, CssBaseline, Toolbar, IconButton, Typography } from '@material-ui/core';
import {Menu, RadioButtonCheckedOutlined} from '@material-ui/icons';
import { ElevationScroll } from '..';
import {addStyles} from '../../hoc';
import {styles} from './styles';

class Header extends React.Component{

    render(){
        const {classes} = this.props;
        return(
            <>
                <CssBaseline />
                <ElevationScroll {...this.props}>
                    <AppBar color="inherit">
                        <Toolbar>
                            <IconButton edge="start" 
                                        color="inherit" aria-label="open drawer">
                                <Menu />
                            </IconButton>

                            <Typography variant="h6" className={classes.title}>
                                Check<RadioButtonCheckedOutlined className={classes.mr1} color="primary" />Point
                            </Typography>
                            
                        </Toolbar>
                    </AppBar>
                </ElevationScroll>
            </>
        );
    }
}

export default addStyles(Header, styles);