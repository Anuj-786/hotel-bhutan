import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = () => ({
    root: {
        width: 300,
    },
    slider: {
        padding: '22px 0px',
    },
});
class SidebarFilters extends Component {
    state = {
        checked: [0],
    }

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        this.setState({
          checked: newChecked,
        });
    };

    render() {
        const { classes } = this.props;
        console.log(this.props)
        return (
            <div>
                <Grid container direction="row" style={{paddingLeft: '25px'}}>
                    <Typography variant="title">Price Range</Typography>
                    <List className={classes.root}>
                        {["Below ₹2000","₹2001 - ₹4000", "₹4001 - ₹6000", "6001 - ₹8000"].map(value => (
                            <ListItem style={{padding: 0}} key={value} role={undefined} dense button onClick={this.handleToggle(value)}>
                                <Checkbox
                                checked={this.state.checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                                />
                                <ListItemText primary={`${value}`} />
                                
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid container direction="row" style={{paddingLeft: '25px'}}>
                    <Grid item xs={12}><Typography variant="title">Property Type</Typography></Grid>
                    <List className={classes.root}>
                        {["Hotels","Homestay", "Guest House"].map(value => (
                            <ListItem style={{padding: 0}} key={value} role={undefined} dense button onClick={this.handleToggle(value)}>
                                <Checkbox
                                checked={this.state.checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                                />
                                <ListItemText primary={`${value}`} />
                                
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid container direction="row" style={{paddingLeft: '25px'}}>
                    <Grid item xs={12}><Typography variant="title">Facilities</Typography></Grid>
                    <List className={classes.root}>
                        {["Restaurant/Bar","Internet/Wi-Fi", "Parking"].map(value => (
                            <ListItem style={{padding: 0}} key={value} role={undefined} dense button onClick={this.handleToggle(value)}>
                                <Checkbox
                                checked={this.state.checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                                />
                                <ListItemText primary={`${value}`} />
                                
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid container direction="row" style={{paddingLeft: '25px'}}>
                    <Grid item xs={12}><Typography variant="title">User Ratings</Typography></Grid>
                    <List className={classes.root}>
                        {["4.5 & above (Excellent)","4 & above (Very Good)", "3 & above (Good)", "2.5 & Above(Average)"].map(value => (
                            <ListItem style={{padding: 0}} key={value} role={undefined} dense button onClick={this.handleToggle(value)}>
                                <Checkbox
                                checked={this.state.checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                                />
                                <ListItemText primary={`${value}`} />
                                
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </div>
        )
    }
} 
SidebarFilters.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SidebarFilters)