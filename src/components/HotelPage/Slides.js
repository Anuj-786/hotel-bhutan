import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@material-ui/core/MobileStepper';
import StarRatingComponent from 'react-star-rating-component';
import Divider from '@material-ui/core/Divider';

import { Link } from 'react-router-dom';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const tutorialSteps = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        require('../../assets/1.jpg'),
    },
    {
      label: 'Bird',
      imgPath:
      require('../../assets/4.jpg'),
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        require('../../assets/5.jpg'),
    }
];

class Slides extends Component {
    state = {
        activeStep: 0,
    };
    handleNext = () => {
        this.setState(prevState => ({
          activeStep: prevState.activeStep + 1,
        }));
    };
    
    handleBack = () => {
        this.setState(prevState => ({
          activeStep: prevState.activeStep - 1,
        }));
    };
    
    handleStepChange = activeStep => {
        this.setState({ activeStep });
    };
    render () {
        const { classes, theme } = this.props;
        const { activeStep } = this.state;
        const maxSteps = tutorialSteps.length;
        return (
            <div >
                <Grid container spacing={24}>
                    <Grid item xs={5} >
                        {/* <Paper square elevation={0} className={classes.header}>
                            <Typography>{tutorialSteps[activeStep].label}</Typography>
                        </Paper> */}
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={this.handleStepChange}
                            enableMouseEvents
                            >
                            {tutorialSteps.map((step, index) => (
                                <div key={step.label}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <img className={classes.img} src={step.imgPath} alt={step.label} />
                                ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            className={classes.mobileStepper}
                            nextButton={
                                <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                            
                                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                
                                </Button>
                            }
                        
                        />
                        <Typography varient="title" style={{fontSize: 24}}>Hotel Divyansh by DLS Hotels</Typography>
                        <StarRatingComponent 
                            name="rate1" 
                            starCount={5}
                            value={3.9}  
                        /><br />
                        <Link to='/' style={{textDecoration: 'none'}}><Typography color="primary" >Trail to Triund Hill from Main Square, Dharamkot, Dharamshala, Himachal Pradesh 176216</Typography></Link>
                    </Grid>
                    <Grid item xs={7}>
                            <Grid container spacing={16}>
                                <Grid item xs={6}>
                                    <img style={{width: 340, height: 200 }} src={require('../../assets/1.jpg')} />
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography color="primary" variant="caption">Restaurant</Typography>
                                            <img style={{width: 170, height: 130}} src={require('../../assets/restu.jpg')} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography color="primary" variant="caption">Location</Typography>
                                            <img style={{width: 170, height: 130}} src={require('../../assets/map.jpeg')} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid item xs={12}>
                                        <Grid container style={{padding: 10, border: '1px solid red', boxShadow: 'red 0px 0px 5px 0px'}}>
                                            <Grid item xs={8}>
                                                <Typography variant="title" color="primary" style={{fontSize: 18, fontWeight: 'bold'}}>Delux Room</Typography>
                                                <Typography >Price Per Night for 2 Adults</Typography>
                                            </Grid>
                                            <Grid xs={4} style={{textAlign: 'right'}}>
                                                <Typography><strike>₹ 2,999</strike></Typography>
                                                <Typography  color="secondary" style={{fontSize: 18, fontWeight: 'bold'}}>₹ 2,525</Typography>
                                            </Grid>
                                            <Grid container><hr /></Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="caption" color="secondary" style={{fontSize: 12}}>Non Refundable</Typography>
                                                <Typography variant="caption" style={{fontSize: 12}}>Breakfast</Typography>
                                            </Grid>
                                            <Grid xs={4} style={{textAlign: 'right'}}>
                                                <Typography color="secondary">Saving ₹ 474</Typography>
                                                <Typography variant="caption"  style={{fontSize: 12}}>Code Used</Typography>
                                                <Typography style={{color:"#00e676", fontSize: 12}}>STAYTODAY3</Typography>
                                            </Grid>
                                            <Grid container><hr /></Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="caption" color="primary" style={{fontSize: 12, fontWeight: 'bold'}}>OHTER ROOMS</Typography>
                                                
                                            </Grid>
                                            <Grid xs={8} style={{textAlign: 'right'}}>
                                            <Button style={{fontWeight: 'bold'}} variant="contained"  color="secondary" >BOOK THIS NOW</Button>
                                            </Grid>
                                        </Grid>
                                        
                                    </Grid>
                                </Grid>
                            </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    Sliderroot: {
        maxWidth: 650,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 350,
        display: 'block',
        maxWidth: 700,
        overflow: 'hidden',
        width: '100%',
    },
  });
Slides.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(Slides);