import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import RoomReview from './RoomReview';

class Book extends Component {
    render() {
        return (
            <Grid container spacing={16} style={{padding: 25}}>
                <Grid item xs={12}><Typography style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}} color="primary">You Are Almost Done!</Typography></Grid>
                <Grid container spacing={16}>
                    <RoomReview />
                </Grid>
            </Grid>            
        )
    }
}

export default Book;