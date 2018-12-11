import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
     
        <React.Fragment>
          <Grid container spacing={24}>
          <Grid item xs={12}>
          <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Sign In Required!
          </Typography>

        </Toolbar>
      </AppBar>
          </Grid>
          <Grid item xs={12}>
            Please Enter Your Property Details
          </Grid>
        </Grid>
        </React.Fragment>
     
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;