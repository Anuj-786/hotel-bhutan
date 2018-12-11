import React,{Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Fab from '../../assets/f.svg';
import Twi from '../../assets/t.svg';
import Lin from '../../assets/l.svg';
const styles={
	color: {
		color:'#fff',
		display:'inline-block',
		marginRight: 10,
		textDecoration: 'none'

	},
	social: {
		color: '#fff',
		display: 'inline-block',
		marginLeft: 10,
		width: 40,
		textDecoration: 'none'
	},
	
}
class footer extends Component {
	
	render() {
		return (
              <AppBar position="static" color="Secondary">
        <Toolbar>
          <div style={{width:'100%',display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between'}}>
          <div>
          	<a href="#" style={styles.color}>About Us</a>
          	<a href="#" style={styles.color}>Disclaimer</a>
          </div>
          <div>
          	<a href="#" style={styles.social}><img src={Fab}/></a>
          	<a href="#" style={styles.social}><img src={Twi}/></a>
          	<a href="#" style={styles.social}><img src={Lin}/></a>
          </div>
          </div>
          
        </Toolbar>
        <Divider/>
        <Typography variant="caption" gutterBottom style={{color:'#fff',paddingLeft:'24px'}}>
         Copyright 2018. All rights reserved | HotelBookink.bt
      </Typography>
        
      </AppBar>
 


	    )
	}
}
export default footer;
