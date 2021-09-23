import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './Leap.css';
import { login } from '../redux/user/userActions';
import Input from '../components/UI/Input';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector(state => state.user);

  const dispatch = useDispatch();

  const userLogin = (e) => {

    e.preventDefault();

    const user = {
      username, password
    }

    dispatch(login(user));
  }

  if (auth.authenticate) {
    return <Redirect to={`/`} />
  }

  document.body.style.backgroundColor = "#008EFF";
  return (
    <div className="loginsection">
    
      <div className="container">
        <div className="leaplogo">Leap Logo</div>
        <div className="logintop">
          <strong>Welcome To</strong>
          <h4>LEAP</h4>
          <p>League of Extraordinary Achieving Professionals</p>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-12 col-md-8">
            <div className="logbox">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="logaccount">
                  <h4 className="log-head"> Login To Your Account</h4>
                    <Form onSubmit={userLogin}>

                    <div className="form-group">
                      <Input
                        label="Username"
               
                        value={username}
                        type="text"
                        className="form-control"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      </div>
                      <div className="form-group">
                      <Input
                        label="Password"
                       
                        value={password}
                        type="password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                      />

</div>
                
                   
                    <div className="forgotpass"><a href="">Forgot your password?</a></div>
                    <div className="allbtns">
                   


                      <Button 
                      className="btn logbutton currentactive" 
                      type="submit">
                        Login
                      </Button>
                 

                  
                      <Link to='/otp-varification' className="btn logbutton"   >Signup</Link> 
                    </div>     </Form>
                  </div>
                </div> <div className="col-12 col-md-6">
                  <div className="rightlog">
                    <span class="inforight">
                      <FontAwesomeIcon icon={faInfoCircle} />       </span>
                    <div className="sample-imgprev">
                      <img src="images/sample.jpg" />
                      <div className="sample-titles">
                        <h5 className="samplehead">Advertisment</h5>
                        <p className="sampleparag"> Lorem ipsum dolor sit</p>
                      </div>
                    </div>
                  </div>
                </div>  </div>
            </div></div>
        </div>
        <div className="logbottom">
          <p>General Notes : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
      </div>
    </div>
  );
}



export default Login;