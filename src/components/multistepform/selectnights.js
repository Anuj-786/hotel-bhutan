import React ,{Component,Fragment}from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});
 const valuestime = ["1 night","2 nights","3 nights","4 nights"
               ,"5 nights","6 nights","7 nights","8 nights","9 nights","10 nights"]
class ControlledOpenSelect extends React.Component {
  state = {
    age: '',
    open: false,
  };
 
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  

  render() {
    const { classes } = this.props;

    return (
       <Fragment>
       
          <InputLabel htmlFor="demo-controlled-open-select" placeholder="check"></InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.age}
            onChange={this.handleChange}
            value1={this.state.age}
            inputProps={{
              name: 'age',
              id: 'demo-controlled-open-select',
            }}
          >
            {
             valuestime.map((el,index)=>(<MenuItem value={index+1}>{el}</MenuItem>))
            }
            
            
          </Select>
        </Fragment>
        

    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);