import React, { Component } from 'react';
import banner from '../../assets/bhutanbanner.jpg';
import './index.css';
import Paper from '@material-ui/core/Paper';
import {Datepicker1,IntegrationReactSelect,ClickAway,SearchForm} from '../SearchForm';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


class Banner extends Component {
    render() {
        return (
            <div className="banner" style={{backgroundImage:`url(${banner})`}}>
               <Paper className="banner-wrapper">
                 <Typography variant="h4" color="secondary">
                 Your website for all Bhutan Travel needs!
      			</Typography>
      			  <Typography variant="body2" gutterBottom style={{padding: '0 0 0 10px'}}>
                 Find deals with hotels, apartments, and more...
      			</Typography>
                <Divider style={{marginBottom: '25px'}}/>
                <SearchForm />
               </Paper>
               </div>
            
        )
    }
}

export default Banner;