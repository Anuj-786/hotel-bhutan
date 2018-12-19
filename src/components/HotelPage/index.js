import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slides from './Slides';
import Rooms from './Rooms';
import HotelLocation from './HotelLocation';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class HotelPage extends Component {
   
    render () {
        const { classes } = this.props; 
        return (
            <div className={classes.root}>
                <Grid container spacing={24} style={{padding: 25}}>
                    <Grid item xs={12}>
                        <Slides />
                    </Grid>
                </Grid>
                <Grid container spacing={24} style={{padding: 25}}>
                    <Grid item xs={12}>
                        <Rooms />
                    </Grid>
                   
                </Grid>
                <Grid container spacing={24} style={{padding: 25}}>
                    <HotelLocation />
                </Grid>
            </div>
        )
    }
}
HotelPage.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HotelPage);