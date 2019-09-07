import React from 'react';
import { Header, Board } from '../../components';
import { Container } from '@material-ui/core';
import { styles } from './styles';
import { addStyles } from '../../hoc';

class App extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <>
                <Header />
                <Container maxWidth="lg" className={classes.body}>
                    <div className={classes.boards}>
                        <Board />
                        <Board />
                    </div>
                </Container>
            </>
        );
    }
}

export default addStyles(App, styles);