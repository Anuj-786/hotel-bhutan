import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import FreeBreakfast from '@material-ui/icons/FreeBreakfast';
import People from "@material-ui/icons/People";
import Home from "@material-ui/icons/Home"
import Check from '@material-ui/icons/Check';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const style = {
    bold: {
        fontWeight: 'bold',
        
    }
}
class Rooms extends Component {
    state = {
        selectButton: 'SELECT ROOM',
        selectedRoom: null,
        carttext: 'Your cart is empety'
    }
    selectRoom = () => {
        
        this.setState({selectButton: "SELECTED", carttext: "" })
    }

    render () {
        return (
            <div>
                <Grid item xs={12} spacing={16} style={{padding: '0px 0px 20px'}}><Typography style={{fontWeight: 'bold', fontSize: 24}} color="primary" variant='title'>Rooms and Price</Typography></Grid>
                <Grid item xs={12} spacing={16} style={{padding: '0px 0px 20px'}}> 
                    <Grid container spacing={16}>
                        <Grid item xs={3}>
                            <Typography style={{fontSize: 18, fontWeight: 'bold'}} color="secondary">ROOM TYPE</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography style={{fontSize: 18, fontWeight: 'bold'}} color="secondary">FACILITIES</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography style={{fontSize: 18, fontWeight: 'bold'}} color="secondary">PRICE</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography style={{fontSize: 18, fontWeight: 'bold'}} color="secondary">YOUR SELECTION</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                {["Delux Room", "Executive Room", "Premium Deluxe"].map(item =>  
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                        <Paper>
                        <Grid container >
                            <Grid item xs={3}>  
                                
                                <Grid container spacing={16} style={{marginTop: 10, paddingLeft: 10, paddingBottom: 15}}>
                                    <Grid item xs={12}>
                                        <Typography style={style.bold} variant="title" color="primary">{item}</Typography>
                                        <img style={{width: 280, borderRadius: 5, padding: '15px 0px 15px 0px'}} src={require('../../assets/delux.jpg')}/>
                                        <Typography color='primary' style={style.bold}>MORE ABOUT THIS ROOM <ArrowRightAlt  style={{margin: '-8px  0px 0px 5px', position: 'absolute', fontSize: '34'}}/></Typography>
                                    </Grid>
                                </Grid> 
                                
                            </Grid>
                        
                            <Grid item xs={3} style={{display: "flex", flexDirection: 'column', justifyContent: 'center'}}>  
                            
                                <Grid container spacing={16} >
                                    <Grid item xs={12} >
                                        <Typography variant="caption" style={{padding: '5px 0px', fontSize: 14  }}><FreeBreakfast style={{left: '-5px', position:'relative', fontSize: 18, top: '4px'}}/> Free Breakfast </Typography>
                                        <Typography variant="caption" style={{padding: '5px 0px', fontSize: 14  }}><Check style={{color: 'green',left: '-5px', position:'relative', fontSize: 18, top: '4px'}}/>Accommodation</Typography>
                                        <Typography variant="caption" style={{padding: '5px 0px', fontSize: 14  }}><Home style={{  left: '-5px', position:'relative', fontSize: 18, top: '4px'}}/>6.1x3.66 sq.mtr</Typography>
                                        <Typography variant="caption" style={{padding: '5px 0px', fontSize: 14  }}><People style={{left: '-5px', position:'relative', fontSize: 18, top: '4px'}}/>Accomodates 3 Adults</Typography>
                                        <Typography variant="caption" style={{padding: '5px 0px', fontSize: 14  }} color="secondary">Non Refundable</Typography>
                                        <Typography style={{padding: '5px 0px', fontSize: 18  }} color='primary'>Cancellation Policy <ArrowRightAlt  style={{margin: '-3px  0px 0px 5px', position: 'absolute', fontSize: '34'}}/></Typography> 
                                    </Grid>
                                </Grid>
                                
                            </Grid>

                            <Grid item xs={3} style={{display: "flex", flexDirection: 'column', justifyContent: 'center'}}>
                                <Grid container spacing={16} >
                                    <Grid item xs={5} style={{textAlign: 'left'}}>
                                        <Typography variant="caption"><strike>₹ 4000/Night</strike></Typography>
                                        <Typography variant="title">₹ 3200</Typography>
                                        <Typography variant="caption">Per Room/Night</Typography>
                                    </Grid>    
                                    <Grid item xs={7} style={{textAlign: 'left'}}>
                                        <Button variant='contained'  color="secondary" onClick={this.selectRoom}>{this.state.selectButton}</Button>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={3}>
                                <Grid container spacing={16}>
                                    <Grid item xs={10} >
                                        <Typography style={{borderRadius: 5, backgroundColor: '#f50057', color: '#fff', fontWeight: 'bold', textAlign: 'center', padding: 8}}>YOUR SELECTION</Typography>
                                        <Grid container>
                                            <Grid>
                                            <Link to='/Booking' style={{textDecoration: 'none'}}>Book Now</Link>        
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        </Paper>
                        </Grid>
                    </Grid>
                )}
                
            </div>
            
        )
    }
}
export default Rooms;