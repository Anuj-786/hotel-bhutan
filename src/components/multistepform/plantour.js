import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import {districts} from '../../DBhotellist';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import Multi from './selectnights';
import Nights from './plannednights';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3,
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}
const names = getFields(districts, "location");
const nights = [1,2,3,4,5,6,7,8,9,10];

function getStyles(name, that) {
  return {
    fontWeight:
      that.state.name.indexOf(name) === -1
        ? that.props.theme.typography.fontWeightRegular
        : that.props.theme.typography.fontWeightMedium,
  };
}

class MultipleSelect extends React.Component {
  state = {
    name: [],
    nights: [],
    isChecked: false,
    color: 'default'
  };
static propTypes = {
        value: PropTypes.object,
        onChange: PropTypes.func,
    }
  handleChange = event => {
    this.setState({ name: event.target.value,});
    
  };

   handleChange1 = event => {
      const selectedIndex = event.target.options.selectedIndex;
      this.setState({
        nights: event.target.options[selectedIndex].getAttribute('data-key')
      })
      console.log(this.state.nights);
  };

  handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      name: value,


    });

    
  };

  render() {
    const { classes,value } = this.props;
    console.log(value);
    const {color} = this.state;
    
    return (
      <div className={classes.root}>
        
        <FormControl className={classes.formControl} style={{width:'100%',maxWidth:'100%'}}>
          <InputLabel htmlFor="select-multiple-chip" syle={{width:'100%'}}>Planned Location of the tour</InputLabel>
          <Select
            multiple
            value={this.state.name}

            onChange={this.handleChange}
            input={<Input id="select-multiple-chip" fullWidth/>}
            renderValue={selected => (
              <div className={classes.chips}>
                {selected.map(value => (
                  <Chip key={value} label={`${value}`} className={classes.chip} />
                ))}
              </div>
            )}
            style={{width:'100%'}}
            MenuProps={MenuProps}
          >
          

            {names.map(name => (
             
               <MenuItem key={name} value={name}>
                <Checkbox checked={this.state.name.indexOf(name) > -1} />
                <ListItemText primary={name} />
                {(this.state.name.indexOf(name) > -1)?( <ListItemSecondaryAction id={name}>
                <span>Planned nights on {name} : </span>
                 
               <Nights
                 SelectLoc={this.handleChange1.bind(this)}
                 /*SelectVal={this.state.nights}*/
                 Thisid ={Math.random()}
              /> 
            </ListItemSecondaryAction>):(<span></span>)}

              </MenuItem> 
                   ))}
       
          </Select>

        </FormControl>
        
        
      </div>
    );
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MultipleSelect);