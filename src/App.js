import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home'
import './App.css';
import Footer from './components/footer';
import HotelListing from './components/HotelListing';
import HotelPage from './components/HotelPage';
import Booking from './components/Booking';

class App extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
     
        <div>
          <Header position="fixed"/>

          <Router>
            <div>
              <Route path="/" exact component={Home} />
              <Route path="/HotelListing" component={HotelListing} />
              <Route path="/HotelPage"  component={HotelPage}></Route>
              <Route path="/Booking" component={Booking}></Route>
            </div>
          </Router>
          <Footer/>

        </div>
     
    );
  }
}

export default App;
