import React from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './components/Login';
import Stagregister from './components/Stagregister';
import Otp from './components/Otp';
import Clubmemregister from './components/Clubmemregister';
import 'bootstrap/dist/css/bootstrap.min.css';
import {

  BrowserRouter as Router,
 Switch,
 Route, 
 Link
 
 } from 'react-router-dom';


class App extends React.Component {
  render(){
  return (
   
<React.Fragment> 

<Router>

<Switch>


<Route exact path='/'>

<Login/>

</Route>


<Route  path='/stagregister'>

<Stagregister/>

</Route>


<Route  path='/otp'>

<Otp/>

</Route>




<Route  path='/clubmemregister'>

<Clubmemregister/>

</Route>










</Switch>



</Router>


</React.Fragment> 

    
  );
} }

export default App;
