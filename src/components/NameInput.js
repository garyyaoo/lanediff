import React from 'react';
import {
    TextField, 
    withStyles,
 } from '@material-ui/core';

const styles = theme => ({
    root: {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 8,
        backgroundColor: '#e6e6e6',
        '&:hover': {
          backgroundColor: '#f2f2f2',
        },
        '&$focused': {
          backgroundColor: '#f2f2f2',
        },
      },
      focused: {},
})

class NameInput extends React.PureComponent {
    render() {
        const { classes } = this.props;
    
        return (
            <TextField InputProps={{classes}} label="Summoner Name" variant='filled'/>
        );
    };
}

export default withStyles(styles)(NameInput);