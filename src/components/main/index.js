import React from 'react';
import {Router,Switch, Route} from 'react-router-dom';
import Location1 from '../footer';
import PopularLocation from '../PopularLocation';



const Main = () => (
<Router>
  <Switch>
  	<Route exact path="/" component={Location1}/>
  	<Route path="/login" component={PopularLocation}/>
  </Switch>
</Router>


)

export default Main;