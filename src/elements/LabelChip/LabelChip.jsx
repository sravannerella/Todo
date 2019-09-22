import React from 'react';
import { Typography, Chip } from '@material-ui/core';
import PropTypes from 'prop-types';
import { addStyles } from '../../hoc';
import {styles} from './styles';

class LabelChip extends React.Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        chipName: PropTypes.string.isRequired,
        variant: PropTypes.oneOf(['outlined', 'default']),
        color: PropTypes.oneOf(['primary', 'secondary', 'default']),
        onClick: PropTypes.func
    }

    static defaultProps = {
        variant: 'default',
        color: 'default'
    }

    render(){
        const {title, chipName, onClick, variant, color, classes} = this.props;
        return(
            <>
                <Typography variant="subtitle2">{title}</Typography>
                <Chip
                    onClick={onClick} 
                    className={classes.chip} 
                    variant={variant}
                    color={color} label={chipName} />
            </>
        )
    }
}

export default addStyles(LabelChip, styles);