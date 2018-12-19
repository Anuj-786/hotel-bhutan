import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import StarRatingComponent from 'react-star-rating-component';
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const style = {
    bold: {
        fontWeight: 'bold',
        
    }
}

class RoomReview extends Component {

    render() {
        return (
            <Grid container spacing={16}>
                <Grid item xs={6} style={{padding: 25}}>  
                    <Grid container spacing={16}>
                        <Grid item xs={12} >
                            <Grid item xs={12}><Typography variant='title' style={{fontWeight: 'bold'}}>Traveller Information</Typography></Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <form   fullWidth>
                                <Grid container spacing={16}>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="outlined-name"
                                            fullWidth
                                            label="First Name"
                                            value=''
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="outlined-name"
                                            fullWidth
                                            label="Last Name"
                                            value=''
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="filled-full-width"
                                            label="Email"
                                            value=''
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        
                                        <TextField
                                            id="filled-full-width"
                                            label="Contact Info"
                                            value=''
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </Grid>

                                </Grid>

                                <Grid item xs={12} style={{textAlign: 'center', paddingTop: 20}}>
                                    <Button variant="contained"  color="secondary" style={{fontWeight: 'bold', fontSize: 18, padding: 10}} >Pay Rs. 930</Button>
                                </Grid>
                                
                            </form>
                        </Grid>

                    </Grid>
                </Grid>
                
                <Grid item xs={6} style={{display: "flex", flexDirection: 'column', justifyContent: 'center'}}>    
                    <Paper>
                    <Grid item xs={12} style={{padding: 25}}>
                        
                        <Grid container spacing={16}>
                            <Grid item xs={4}>
                                <img style={{width: 180, borderRadius: 5}} src={require('../../assets/delux.jpg')}/>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography color="primary" variant="title" style={{fontSize: 24}}>Hotel Divyansh by DLS Hotels</Typography>
                                <StarRatingComponent 
                                    name="rate1" 
                                    starCount={5}
                                    value={3.9}  
                                />
                                <Typography variant="caption" style={{fontSize: 14}}>Bharmkot, Distt. Kangra</Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container spacing={16}>
                                    <Grid item xs={12} style={{display: 'flex'}}>
                                        <Grid item xs={6}>
                                            <Typography>
                                                <ArrowForward style={{position: 'relative', top: 5, fontSize:20}} color="secondary" />
                                                Mon, 17 Dec 2018
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="caption">
                                               Check in Time: 12:00 PM
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{display: 'flex'}}>
                                        <Grid item xs={6}>
                                            <Typography>
                                                <ArrowBack style={{position: 'relative', top: 5, fontSize:20}} color="secondary" />
                                                Mon, 18 Dec 2018
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="caption">
                                               Check Out Time: 11:00 AM
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}><Typography variant="subheading" style={{fontWeight: 'bold'}}>01 Delux Room, 02 Guest, 1 Night</Typography></Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={16}>
                                            <Grid item xs={12}><Typography>PAYMENT DETAILS</Typography></Grid>
                                            <Grid item xs={4}><Typography>Booking Ammount</Typography></Grid>
                                            <Grid item xs={4}><Typography>₹ 3816 x 1 Room</Typography></Grid>
                                            <Grid item xs={4}><Typography>₹ 3816</Typography></Grid>

                                            <Grid item xs={8}><Typography>Price Dropped (39% off)</Typography></Grid>
                                            <Grid item xs={4}><Typography>-<span>₹</span> 1490</Typography></Grid>

                                            <Grid item xs={4}><Typography>Coupon Discount</Typography></Grid>
                                            <Grid item xs={4}><Typography>STAYTODAY3</Typography></Grid>
                                            <Grid item xs={4}><Typography>-<span>₹</span> 1396</Typography></Grid>
                                        
                                            <Grid item xs={8}><Typography variant="subheading" style={{fontWeight: 'bold'}}>Payable Amount</Typography></Grid>
                                            <Grid item xs={4}><Typography variant="subheading" style={{fontWeight: 'bold'}}><span>₹</span> 930</Typography></Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                        
                    </Grid>
                    </Paper>
                </Grid>
            </Grid>
            
        )
    }
}

export default RoomReview;