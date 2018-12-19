import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

class HotelLocation extends Component {
    render () {
        return (
            <div>
                <Grid container spacing={16} style={{padding: 25}}>
                <Grid item xs={12} spacing={16} style={{padding: '0px 0px 20px'}}><Typography style={{fontWeight: 'bold', fontSize: 24}} color="primary" variant='title'>Location</Typography></Grid>

                        <Grid item xs={12}>
                            <Paper>
                                <div class="mapouter">
                                    <div class="gmap_canvas">
                                        <iframe width="700" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Hotel%20Divyansh%20by%20DLS%20Hotels&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                        </iframe><a href="https://www.pureblack.de/webdesign-darmstadt/"></a>
                                        </div>
                                </div>
                            </Paper>
                        </Grid>
                       
                    
                </Grid>
            </div>
            
        )
    }
}
export default HotelLocation;