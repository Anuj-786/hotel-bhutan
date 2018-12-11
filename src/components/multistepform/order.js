import React,{Component,Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Datepicker1, IntegrationReactSelect} from '../SearchForm';
import Grid from '@material-ui/core/Grid';
class UserDetails extends Component {
	render() {
		return (
		<Fragment>
		<Grid container spacing={24}>
        <Grid item xs={12}>
         <IntegrationReactSelect/>
        </Grid>
        <Grid item xs={12}>
         <Datepicker1/>
        </Grid>
        <Grid item xs={12}>
        <TextField
           required
          id="no"
          label="Total Members"
          type="number"
          
          margin="normal"
        />
        </Grid>
        <Grid item xs={12}>
                <TextField
          id="standard-multiline-flexible"
          label="Message"
          multiline
          rowsMax="4"
          margin="normal"
        />
        </Grid>
        </Grid>
        </Fragment>
		)
	}
}
export default UserDetails;