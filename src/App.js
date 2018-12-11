import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home'
import './App.css';
import HotelListing from './components/HotelListing';

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
            </div>
          </Router>
         
        </div>
     
    );
  }
}

export default App;
