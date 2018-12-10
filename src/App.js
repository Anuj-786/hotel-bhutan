import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import Header from './components/Header';
import Banner from './components/Banner';
import PopularLocation from './components/PopularLocation';
import ABC from './components/Location';
import './App.css';

class App extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
     
        <div>
          <Header position="fixed"/>
          <Banner />
          <ABC />
          <PopularLocation />
        </div>
     
    );
  }
}

export default App;
