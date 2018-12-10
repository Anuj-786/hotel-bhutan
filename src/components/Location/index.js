import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Loc1 from './location1';
import Loc2 from './location2';
import Paper from '@material-ui/core/Paper';

import Loc3 from './location3';



const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '25px',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={`${classes.root} popular-destinations`}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Popular Destinations
      </Typography>
        </Grid>
       
        <Grid item xs={12} sm={4}>
          <Loc1/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Loc2/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Loc3/>
        </Grid>
        <Grid item xs={12}>
           <Typography variant="h4" gutterBottom>
            Why Hotel Booking-Bt ?
      </Typography>
        
       <Typography variant="body" gutterBottom>
            Text Showing the importance of booking hotel from Hotel Booking-Bt like
            Many hotels and especially vacation rentals don’t have a complete website.
            They make a generic site and fill it with inadequate information. And most importantly, the Booking Systems that they use are way difficult to understand. 
            And that’s why guests prefer Hotel booking-bt over those hotel-website.
            Because Booking. com provides them with a simple Reservation System along with detail information.
            In fact, this is the one key reason why people love to use all those OTA sites, even though it costs them a higher fees.
      </Typography>
        <Typography variant="body" gutterBottom>
            Text Showing the importance of booking hotel from Hotel Booking-Bt like
            Many hotels and especially vacation rentals don’t have a complete website.
            They make a generic site and fill it with inadequate information. And most importantly, the Booking Systems that they use are way difficult to understand. 
            And that’s why guests prefer Hotel booking-bt over those hotel-website.
            Because Booking. com provides them with a simple Reservation System along with detail information.
            In fact, this is the one key reason why people love to use all those OTA sites, even though it costs them a higher fees.
      </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
