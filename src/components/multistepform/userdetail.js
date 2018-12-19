import React, { Component,Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PlannedTour from './plantour';


var phoneno = /^\d{10}$/;
var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();  
  /*  if(this.props.values.firstName === '') {
          alert("Your Name is required");
    }
    else if(this.props.values.Email === '') {
       alert("Your Email Address is required")
    }
    else if(!this.props.values.Email.match(email)) {
       alert("Enter valid Email Address")
    }
    else if(this.props.values.Phone === '') {
      alert("Your Phone Number is required")
    }
    else if(!this.props.values.Phone.match(phoneno)) {
      alert("Enter valid Phone Number")
    }
    else {*/
      this.props.nextStep();
   /* } */ 

    
  };

  render() {
    const { values, handleChange } = this.props;
    console.log(values.firstName);
    return (
     
       <div className="form-wrapper">
          <Grid container spacing={24}>
          <Grid item xs={12}>
          <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Please Enter Your Details
          </Typography>

        </Toolbar>
      </AppBar>
          </Grid>
          <Grid item xs={12}>
            <TextField
          id="fname"
          label="First Name"
          placeholder="First Name"
          margin="normal"
          type="text"
          fullWidth
          onChange = {handleChange('firstName')}
          defaultValue={values.firstName}
        /><br/>
        <TextField
          id="lname"
          label="Last Name"
          placeholder="Last Name"
          margin="normal"
          type="text"
          fullWidth
          onChange = {handleChange('LastName')}
          defaultValue={values.LastName}
        /><br/>
         <TextField
          id="email"
          label="Email"
          placeholder="Email"
          margin="normal"
          autoComplete="email"
          type="email"
          fullWidth
          onChange = {handleChange('Email')}
          defaultValue={values.Email}
        /><br/>
         <TextField
          id="phone"
          label="Phone"
          placeholder="Phone"
          margin="normal"
          type="number"
          fullWidth
          onChange = {handleChange('Phone')}
          defaultValue={values.Phone}
        /><br/>
        <PlannedTour/>

          </Grid>
          <Grid item xs={12}>

           <Button variant="contained" color="secondary" onClick={this.continue}>
             Continue...
          </Button>
          </Grid>
        </Grid>
        </div>
     
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;