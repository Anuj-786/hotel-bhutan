import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import Header from './components/Header';
import Banner from './components/Banner';
import PopularLocation from './components/PopularLocation';

class App extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
     
        <div>
          <Header />
          <Banner />
          <PopularLocation />
        </div>
     
    );
  }
}

export default App;
