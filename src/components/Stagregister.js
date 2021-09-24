import React from 'react';
import './Leap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faInfoCircle } from '@fortawesome/free-solid-svg-icons';
function Stagregister() {
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
    <div className="logbox register">


    <div className="row">
    <div className="col-12 col-md-6">

    <div className="logaccount">


     <h4 className="log-head"> Get Started</h4>
     

      <div className="form-group">
        <label>Enter Name   </label>

      <div className="input-group"><span className="input-group-text">Mr</span>
      <input id="inlineFormInputGroupUsername" className="form-control"/>

      </div></div>


      <div className="form-group">
        <label>Age & DOB   </label>
        <input type="text" autoComplete="new-password"  className="form-control"/>
      </div>


      <div className="form-group">
        <label>Mobile Number  </label>

      <div className="input-group"><span className="input-group-text">+91</span>
      <input  id="inlineFormInputGroupUsername" className="form-control"/>

      </div></div>

      <div className="form-group">
        <label>Email Id   </label>
        <input type="text" autoComplete="new-password"  className="form-control"/>
      </div>












  














      </div>
      </div> <div className="col-12 col-md-6">





<div className="logaccount">



<div className="rightinputs">



<div className="form-group">
        <label>User Name   </label>
        <input type="text" autoComplete="new-password"  className="form-control"/>
      </div>
      <div style={{ marginTop: 10 }}   className="form-group">
      <label>Password <span class="info">
    <FontAwesomeIcon icon={faInfoCircle} />       </span>
        </label>
        <input type="password"  autoComplete="new-password" className="form-control" />
      </div>

      <div style={{ marginTop: 10 }}   className="form-group">
      <label>Confirm Password 
        </label>
        <input type="password"  autoComplete="new-password" className="form-control" />
      </div>










      <div className="allbtns">

<button type="button" className="btn logbutton currentactive" >Next</button>

</div>

</div>



<span class="inforight">
    <FontAwesomeIcon icon={faInfoCircle} />       </span> 
</div>
      </div>  </div>
      </div></div>
      </div>
      </div>    
    </div>
  );
}



export default Stagregister;