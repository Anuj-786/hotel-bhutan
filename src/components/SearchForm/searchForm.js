import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Datepicker1 from './datepicker';
import IntegrationReactSelect from './autocomplete';
import ClickAway from './rooms';
import Button from '@material-ui/core/Button';
import RightIcon from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CalenderTodayIcon from '@material-ui/icons/CalendarToday';
import GroupAddIcon from '@material-ui/icons/GroupAdd';


 const styles = {
    something: {
          display: 'flex',
          alignItems: 'center',
          padding: '5px',
         
    },
    svg: {
          fill: 'rgba(0, 0, 0, 0.54)',
          paddingRight: '5px',

    }
}

class SearchForm extends Component {
	
	constructor(props) {
		super(props);
            this.state = {
                location:"",
                days: ""
            }

	}
      buttonClick = (e) => {
            e.preventDefault();
            console.log(this.state.location);
            


      }
      handleLoction = (value) => {
       this.setState({
              location: value.value
       })
       
      }
	render() {
		return (

       <div className="search-form">
       	  <form onSubmit={this.buttonClick}>
               <Grid container spacing={24}>
                <Grid item xs={12} style={styles.something}>
                  <LocationOnIcon style={styles.svg}/>
       	  	<IntegrationReactSelect location={this.handleLoction} ref="location" style={{borderBottom: 'none'}}/>
                </Grid>
                 <Grid item xs={12} sm={6} style={styles.something}>
                 <CalenderTodayIcon style={styles.svg}/>
       	  	<Datepicker1 />
                 </Grid>
                  <Grid item xs={12} sm={6} style={styles.something}>
                  <GroupAddIcon style={styles.svg}/>
       	  	<ClickAway />
                  </Grid>
                  <Grid item xs={12}>
            <Button type="submit" variant="contained" color="secondary" style = {{textTransform: 'none',fontWeight: 'bold' }}>
             Find a Deal <RightIcon style={{paddingLeft: '5px'}}></RightIcon>
      </Button>
      </Grid>
      </Grid>
       	  </form>

       </div>

		)
	}
}

export default SearchForm;