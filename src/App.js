import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Login from './containers/Login';
import Stagregister from './containers/Stagregister';
import Otp from './containers/Otp';
import Clubmemregister from './containers/Clubmemregister';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/stag-member-registration' component={Stagregister} />
            <Route path='/otp-varification' component={Otp} />
            <Route path='/club-member-registration' component={Clubmemregister} />
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
