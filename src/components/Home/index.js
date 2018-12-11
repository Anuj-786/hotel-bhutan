import React, { Component } from 'react';
import Banner from '../Banner';
import PopularLocation from '../PopularLocation';
import ABC from '../Location';

class Home extends Component {
    render () {
        return (
            <div>
                <Banner />
                <ABC />
                <PopularLocation />
            </div>   
        ) 
    }
}

export default Home;