import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import grey from '@material-ui/core/colors/grey';
import {TextField} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Add from '@material-ui/icons/AddCircle';
import Sub from '@material-ui/icons/RemoveCircle';
import './index.css';


const styles = theme => ({
  root: {
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    top: 36,
    right: 0,
    left: 0,
  },
   
});

class ClickAway extends React.Component {
  state = {
    open: false,
    adult: 1,
    room: 1,
    children: 0,
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleClickAway = () => {
    this.setState({
      open: false,
    });
  };
      decAdult = () => {
    this.setState(prevState => {
       return {adult: prevState.adult - 1}
    })
}
incAdult = () => {
    this.setState(prevState => {
       return {adult: prevState.adult + 1}
    })
}
incRoom = () => {
    this.setState(prevState => {
       return {room: prevState.room + 1}
    })
} 
decRoom  = () => {
    this.setState(prevState => {
       return {room: prevState.room - 1}
    })
}
incChild  = () => {
    this.setState(prevState => {
       return {children: prevState.children + 1}
    })
}
decChild  = () => {
    this.setState(prevState => {
       return {children: prevState.children - 1}
    })
}
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    const fake = <div className={classes.fake} />;

    return (
      <div className={classes.root}>
        <ClickAwayListener onClickAway={this.handleClickAway}>
          <div>
          <TextField 
          onClick={this.handleClick}
           value = {`${this.state.room} Room, ${this.state.adult} adult, ${this.state.children} children`}
           className="rooms-select"
          />
          
            {open ? (
              <Paper className={classes.paper} style={{zIndex:'100'}}>
              <List>
                  <ListItem>
                    <ListItemText
                      primary= {`Rooms  ${this.state.room}`}
                    />
                    <ListItemSecondaryAction>
                    <IconButton aria-label="Add">
                        <Add onClick={this.incRoom}/>
                      </IconButton>
                      <IconButton aria-label="Delete" className = {`minus-${this.state.room}`}>
                        <Sub onClick= {this.decRoom}/>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
              </List>
              <Divider />
               <List>
                  <ListItem>
                    <ListItemText
                      primary= {`Adults  ${this.state.adult}`}
                    />
                    <ListItemSecondaryAction>
                    <IconButton aria-label="Add">
                        <Add onClick={this.incAdult}/>
                      </IconButton>
                      <IconButton aria-label="Delete" className = {`minus-${this.state.adult}`}>
                        <Sub onClick= {this.decAdult}/>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
              </List>
              <Divider />
              <List>
                  <ListItem>
                    <ListItemText
                      primary= {`Children  ${this.state.children}`}
                    />
                    <ListItemSecondaryAction>
                    <IconButton aria-label="Add">
                        <Add onClick={this.incChild}/>
                      </IconButton>
                      <IconButton aria-label="Delete" className = {`childminus-${this.state.children}`}>
                        <Sub onClick= {this.decChild}/>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
              </List>

              </Paper>
            ) : null}
          </div>
        </ClickAwayListener>
      </div>
    );
  }
}

ClickAway.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClickAway);