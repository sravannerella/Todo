import React from 'react';
import { Header } from '../../components';
import { Board, ShowTaskModal } from '../../containers';
import { Container, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { styles } from './styles';
import { addStyles } from '../../hoc';

class App extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <>
                <Header />
                <Container maxWidth="xl" className={classes.body}>

                    <ShowTaskModal />

                    <div className={classes.ml1}>
                        <Fab color="primary" variant="extended" id="btn">
                            <Add />
                            Add Board
                        </Fab>
                    </div>
                    <div className={classes.boards}>
                        <Board />
                    </div>
                </Container>
            </>
        );
    }
}

export default addStyles(App, styles);