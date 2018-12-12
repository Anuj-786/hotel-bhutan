import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SidebarFilters from './SidebarFilters'
import Listing from './HotelListing'
import SearchFormListing from './SearchForm';

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

class HotelListing extends Component {
    
    render () {
        const { classes } = this.props;
        
        return (
            <div variant="title" className={classes.root}>
                <Grid container spacing={24}>
                       
                    <Grid item xs={12}>
                        <SearchFormListing />
                    </Grid>
                   
                    <Grid item xs={12} style={{margin: '25px 0px 0px 25px'}}>
                        <Typography style={{fontSize: 28}}>Hotels in Location</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper><SidebarFilters /></Paper>
                    </Grid>
                    <Grid item xs={9} container>
                        <Listing />
                    </Grid>
                </Grid>
            </div>
        ) 
    }
}
HotelListing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HotelListing);