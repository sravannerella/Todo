import React from 'react';
import { styles } from './styles';
import { addStyles } from '../../hoc';

class Attachments extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.attachment}>
                
            </div>
        );
    }
}

export default addStyles(Attachments, styles);