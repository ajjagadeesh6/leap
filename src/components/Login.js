import React from 'react';
import './Leap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import sampleimage from './sample.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

function Login() {
    document.body.style.backgroundColor = "#008EFF";
  return (

    <div className="loginsection">

<h1>test</h1>







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
      <div className="form-group">
        <label>User Name   </label>
        <input type="text" autoComplete="new-password"  className="form-control"/>
      </div>
      <div style={{ marginTop: 10 }}   className="form-group">
      <label>Password 
        <span class="info">
    <FontAwesomeIcon icon={faInfoCircle} />       </span> </label>
        <input type="password"  autoComplete="new-password" className="form-control" />
      </div>

<div className="forgotpass"><a href="">Forgot your password?</a></div>




<div className="allbtns">

      <button type="button" className="btn logbutton currentactive" >Login</button>
       
  <Link  to='/stagregister' className="btn logbutton"   >Signup</Link>
      </div>







      </div>
      </div> <div className="col-12 col-md-6">





<div className="rightlog">

<span class="inforight">
    <FontAwesomeIcon icon={faInfoCircle} />       </span> 
<div className="sample-imgprev">

<img src={sampleimage} />
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