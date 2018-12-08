import React, {Component} from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

class Login extends Component {
    render () {
        return (
            <div>
                <form>
                <TextField
                    id="standard-name"
                    label="Name"
                    
                    
                    margin="normal"
                    />
                    <TextField
                    id="standard-uncontrolled"
                    label="Uncontrolled"
                    defaultValue="foo"
                   
                    margin="normal"
                    />
                </form>
            </div>
        )
    }
}