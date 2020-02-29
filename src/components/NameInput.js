import React from 'react';
import { TextField } from '@material-ui/core';

class NameInput extends React.PureComponent {
    render() {
        return (
            <TextField label="Summoner Name" variant="filled"/>
        );
    };
}

export default NameInput;