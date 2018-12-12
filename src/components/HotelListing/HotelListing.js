import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Wifi from '@material-ui/icons/Wifi';
import LocalParking from '@material-ui/icons/LocalParking';
import Button from '@material-ui/core/Button';
import StarRatingComponent from 'react-star-rating-component';
import LocationOn from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      color: theme.palette.text.secondary,
    },
    button: {
        fontSize: 24
    },
    bookNowBtn: {
        fontSize: 24,
        margin: '10px 0px 0px 0px'
    }
  });
class Listing extends Component {
    
    render() {
        const { classes } = this.props;
        return (
            
                <div>
                    <Paper className={classes.paper}>
                    <Grid container spacing={16}>
                        <Grid item style={{padding: '0px 0px 0px 20px'}}>
                            <ButtonBase className={classes.image}>
                                <img width={250} className={classes.img} alt="complex" src={require('../../assets/1.jpg')} />
                            </ButtonBase>
                        </Grid>
                        <Grid item style={{padding: '0px 40px 0px 30px'}}>
                            <Typography varient="title" style={{fontSize: 24}}>Hotel Divyansh by DLS Hotels</Typography>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={5}
                                value={3.9}  
                            />
                            <Typography varient="caption" style={{fontSize: 12, display: 'flex', margin: '5px 0px 5px 0px'}}><LocationOn style={{fontSize: 16}} />Naddi</Typography>
                            <Typography varient="caption" style={{fontSize: 12, margin: '13px 0px 8px 0px'}}>1 min from Naddi View Point</Typography>
                            <Grid container>
                                <Typography style={{fontSize: 12, display: 'flex', margin: '8px 0px'}}><Wifi style={{fontSize: 16, margin: '0px 10px 0px 0px'}}/> Free Wi-fi</Typography>
                                <Typography style={{fontSize: 12, display: 'flex', margin: '8px 15px'}}><LocalParking Wifi style={{fontSize: 16, margin: '0px 10px 0px 0px'}}/>Local Parking</Typography>
                            </Grid>
                            <Typography varient="caption" style={{fontSize: 12, margin: '10px 0px 8px 0px'}}>More Options <Link to="/">Breakfast Included</Link></Typography>
                        </Grid>
                        <Grid item style={{padding: '0px 30px 0px 40px', flexDirection: 'row', alignSelf: 'start', textAlign: 'end' }}>
                            <Button   color="secondary" className={classes.button}>₹ 1,999</Button>
                            <Typography varient="caption">+₹ 0 taxes and charges</Typography>
                            <Button variant="contained"  color="secondary" className={classes.bookNowBtn}>Book Now</Button>
                        </Grid>
                    </Grid>
                    </Paper>

                    <Paper className={classes.paper}>
                    <Grid container spacing={16}>
                        <Grid item style={{padding: '0px 0px 0px 20px'}}>
                            <ButtonBase className={classes.image}>
                                <img width={250} className={classes.img} alt="complex" src={require('../../assets/8.jpg')} />
                            </ButtonBase>
                        </Grid>
                        <Grid item style={{padding: '0px 40px 0px 30px'}}>
                            <Typography varient="title" style={{fontSize: 24}}>Hotel Divyansh by DLS Hotels</Typography>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={5}
                                value={3.9}  
                            />
                            <Typography varient="caption" style={{fontSize: 12, display: 'flex', margin: '5px 0px 5px 0px'}}><LocationOn style={{fontSize: 16}} />Naddi</Typography>
                            <Typography varient="caption" style={{fontSize: 12, margin: '13px 0px 8px 0px'}}>1 min from Naddi View Point</Typography>
                            <Grid container>
                                <Typography style={{fontSize: 12, display: 'flex', margin: '8px 0px'}}><Wifi style={{fontSize: 16, margin: '0px 10px 0px 0px'}}/> Free Wi-fi</Typography>
                                <Typography style={{fontSize: 12, display: 'flex', margin: '8px 15px'}}><LocalParking Wifi style={{fontSize: 16, margin: '0px 10px 0px 0px'}}/>Local Parking</Typography>
                            </Grid>
                            <Typography varient="caption" style={{fontSize: 12, margin: '10px 0px 8px 0px'}}>More Options <Link to="/">Breakfast Included</Link></Typography>
                        </Grid>
                        <Grid item style={{padding: '0px 30px 0px 40px', flexDirection: 'row', alignSelf: 'start', textAlign: 'end' }}>
                            <Button   color="secondary" className={classes.button}>₹ 1,999</Button>
                            <Typography varient="caption">+₹ 0 taxes and charges</Typography>
                            <Button variant="contained"  color="secondary" className={classes.bookNowBtn}>Book Now</Button>
                        </Grid>
                    </Grid>
                    </Paper>

                    <Paper className={classes.paper}>
                    <Grid container spacing={16}>
                        <Grid item style={{padding: '0px 0px 0px 20px'}}>
                            <ButtonBase className={classes.image}>
                                <img width={250} className={classes.img} alt="complex" src={require('../../assets/6.jpg')} />
                            </ButtonBase>
                        </Grid>
                        <Grid item style={{padding: '0px 40px 0px 30px'}}>
                            <Typography varient="title" style={{fontSize: 24}}>Hotel Divyansh by DLS Hotels</Typography>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={5}
                                value={3.9}  
                            />
                            <Typography varient="caption" style={{fontSize: 12, display: 'flex', margin: '5px 0px 5px 0px'}}><LocationOn style={{fontSize: 16}} />Naddi</Typography>
                            <Typography varient="caption" style={{fontSize: 12, margin: '13px 0px 8px 0px'}}>1 min from Naddi View Point</Typography>
                            <Grid container>
                                <Typography style={{fontSize: 12, display: 'flex', margin: '8px 0px'}}><Wifi style={{fontSize: 16, margin: '0px 10px 0px 0px'}}/> Free Wi-fi</Typography>
                                <Typography style={{fontSize: 12, display: 'flex', margin: '8px 15px'}}><LocalParking Wifi style={{fontSize: 16, margin: '0px 10px 0px 0px'}}/>Local Parking</Typography>
                            </Grid>
                            <Typography varient="caption" style={{fontSize: 12, margin: '10px 0px 8px 0px'}}>More Options <Link to="/">Breakfast Included</Link></Typography>
                        </Grid>
                        <Grid item style={{padding: '0px 30px 0px 40px', flexDirection: 'row', alignSelf: 'start', textAlign: 'end' }}>
                            <Button   color="secondary" className={classes.button}>₹ 1,999</Button>
                            <Typography varient="caption">+₹ 0 taxes and charges</Typography>
                            <Button variant="contained"  color="secondary" className={classes.bookNowBtn}>Book Now</Button>
                        </Grid>
                    </Grid>
                    </Paper>

                    <Paper className={classes.paper}>
                    <Grid container spacing={16}>
                        <Grid item style={{padding: '0px 0px 0px 20px'}}>
                            <ButtonBase className={classes.image}>
                                <img width={250} className={classes.img} alt="complex" src={require('../../assets/4.jpg')} />
                            </ButtonBase>
                        </Grid>
                        <Grid item style={{padding: '0px 40px 0px 30px'}}>
                            <Typography varient="title" style={{fontSize: 24}}>Hotel Divyansh by DLS Hotels</Typography>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={5}
                                value={3.9}  
                            />
                            <Typography varient="caption" style={{fontSize: 12, display: 'flex', margin: '5px 0px 5px 0px'}}><LocationOn style={{fontSize: 16}} />Naddi</Typography>
                            <Typography varient="caption" style={{fontSize: 12, margin: '13px 0px 8px 0px'}}>1 min from Naddi View Point</Typography>
                            <Grid container>
                                <Typography style={{fontSize: 12, display: 'flex', margin: '8px 0px'}}><Wifi style={{fontSize: 16, margin: '0px 10px 0px 0px'}}/> Free Wi-fi</Typography>
                                <Typography style={{fontSize: 12, display: 'flex', margin: '8px 15px'}}><LocalParking Wifi style={{fontSize: 16, margin: '0px 10px 0px 0px'}}/>Local Parking</Typography>
                            </Grid>
                            <Typography varient="caption" style={{fontSize: 12, margin: '10px 0px 8px 0px'}}>More Options <Link to="/">Breakfast Included</Link></Typography>
                        </Grid>
                        <Grid item style={{padding: '0px 30px 0px 40px', flexDirection: 'row', alignSelf: 'start', textAlign: 'end' }}>
                            <Button   color="secondary" className={classes.button}>₹ 1,999</Button>
                            <Typography varient="caption">+₹ 0 taxes and charges</Typography>
                            <Button variant="contained"  color="secondary" className={classes.bookNowBtn}>Book Now</Button>
                        </Grid>
                    </Grid>
                    </Paper>

                    <Paper className={classes.paper}>
                    <Grid container spacing={16}>
                        <Grid item style={{padding: '0px 0px 0px 20px'}}>
                            <ButtonBase className={classes.image}>
                                <img width={250} className={classes.img} alt="complex" src={require('../../assets/6.jpg')} />
                            </ButtonBase>
                        </Grid>
                        <Grid item style={{padding: '0px 40px 0px 30px'}}>
                            <Typography varient="title" style={{fontSize: 24}}>Hotel Divyansh by DLS Hotels</Typography>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={5}
                                value={3.9}  
                            />
                            <Typography varient="caption" style={{fontSize: 12, display: 'flex', margin: '5px 0px 5px 0px'}}><LocationOn style={{fontSize: 16}} />Naddi</Typography>
                            <Typography varient="caption" style={{fontSize: 12, margin: '13px 0px 8px 0px'}}>1 min from Naddi View Point</Typography>
                            <Grid container>
                                <Typography style={{fontSize: 12, display: 'flex', margin: '8px 0px'}}><Wifi style={{fontSize: 16, margin: '0px 10px 0px 0px'}}/> Free Wi-fi</Typography>
                                <Typography style={{fontSize: 12, display: 'flex', margin: '8px 15px'}}><LocalParking Wifi style={{fontSize: 16, margin: '0px 10px 0px 0px'}}/>Local Parking</Typography>
                            </Grid>
                            <Typography varient="caption" style={{fontSize: 12, margin: '10px 0px 8px 0px'}}>More Options <Link to="/">Breakfast Included</Link></Typography>
                        </Grid>
                        <Grid item style={{padding: '0px 30px 0px 40px', flexDirection: 'row', alignSelf: 'start', textAlign: 'end' }}>
                            <Button   color="secondary" className={classes.button}>₹ 1,999</Button>
                            <Typography varient="caption">+₹ 0 taxes and charges</Typography>
                            <Button variant="contained"  color="secondary" className={classes.bookNowBtn}>Book Now</Button>
                        </Grid>
                    </Grid>
                    </Paper>
                    
                    
                </div>
            
        )
    }
}

Listing.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Listing);
