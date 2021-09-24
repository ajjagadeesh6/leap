import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './containers/Login';
import Home from './containers/Home';
import Stagregister from './components/Stagregister';
import Otp from './components/Otp';
import Clubmemregister from './components/Clubmemregister';
import { isUserLoggedIn } from './redux';
import PrivateRoute from './components/HOC/PrivateRoute';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.user)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate])

  return (
    <React.Fragment>
      <Switch>
        <PrivateRoute exact path='/' component={Home} />

        <Route path='/login' component={Login} />
        <Route path='/stag-member-registration' component={Stagregister} />
        <Route path='/otp-varification' component={Otp} />
        <Route path='/club-member-registration' component={Clubmemregister} />
      </Switch>
    </React.Fragment>
  );

}

export default App;
