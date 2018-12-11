import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Cross from '@material-ui/icons/Clear';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import img1 from '../../assets/2.jpeg';
import img2 from '../../assets/4.jpg';
import img3 from '../../assets/15.jpg';
import img4 from '../../assets/16.jpg';
import img5 from '../../assets/17.jpg';
import './index.css';

export const tutorialSteps = [
{
    label: 'Phuntsholing',
    imgPath:
      img5,
  },
  {
    label: 'Location Name 6',
    imgPath:
      img4,
  },
  {
    label: 'Location Name 7',
    imgPath:
      img3,
  },
  
  {
    label: 'Location Name 8',
    imgPath:
      img1
    },
  {
    label: 'Location Name 9',
    imgPath:
      img2,
  },

  
];

const styles = theme => ({
  root: {
    maxWidth: '100%',
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
    height: 300,
    maxWidth: '100%',
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
});

class TextMobileStepper2 extends React.Component {
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
      activeStep: 0,
    }));
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;
   
   


    return (
      <div className={`${classes.root} location-wrapper`}>
        <Paper square>
          
        <GridList cellHeight={'auto'}>
        <GridListTile cols={2}>
            <img
              className={classes.img}
              src={tutorialSteps[activeStep].imgPath}
              alt={tutorialSteps[activeStep].label}
            />
            <GridListTileBar
              title={tutorialSteps[activeStep].label}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon style={{fill: "#fff"}}/>
                </IconButton>
              }
            />
          </GridListTile>
          </GridList>
         </Paper>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={`${classes.mobileStepper} controls`}
          nextButton={
            <Button size="small" className={maxSteps - 1 - activeStep === 0 ? 'finish':'start'} onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              
             <Cross/>
            </Button>
          }
          backButton={
            <Button size="small" className={maxSteps - 1 - activeStep > 0 ? 'finish':'start'}  onClick={this.handleBack} disabled={activeStep === 0}>
              <Cross/>
            </Button>
          }
        />
      </div>
    );
  }
}

TextMobileStepper2.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TextMobileStepper2);