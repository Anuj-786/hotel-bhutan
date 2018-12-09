/* eslint-disable react/no-multi-comp */

import React from 'react';
import Button from '@material-ui/core/Button';
import LoginDialog from './LoginDialog';
import Typography from '@material-ui/core/Typography';
const emails = ['username@gmail.com', 'user02@gmail.com'];

class Login extends React.Component {
  state = {
    open: false,
    selectedValue: emails[1],
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
    return (
      <div>
        {/* <Typography variant="subtitle1">Selected: {this.state.selectedValue}</Typography>
        <br /> */}
        <Button onClick={this.handleClickOpen}><Typography>Login / Sign Up</Typography></Button>
        <LoginDialog
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default Login;