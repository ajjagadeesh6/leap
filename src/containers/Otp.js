import React from 'react';
import './Leap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';
import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';
function Otp() {
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
    <div className="logbox otpbox">

    <Form>
    <div className="row">
    <div className="col-12 col-md-6">

    <div className="logaccount">


     <h4 className="log-head"> Enter Your OTP</h4>


     <div className="row mt-6 otpur">
     <div className="col-3">
     <Form.Group className="form-group" >

    <Form.Control type="text" value="3" />
 
  </Form.Group>
   
      </div>
      <div className="col-3">
      <Form.Group className="form-group" >

<Form.Control type="text" value="8" />

</Form.Group>
      </div>

      <div className="col-3">
      <Form.Group className="form-group" >

<Form.Control type="text" value="4" />

</Form.Group>
      </div>

      <div className="col-3">
      <Form.Group className="form-group" >

<Form.Control type="text" value="1" />

</Form.Group>
      </div>
      </div>

<div className="forgotpass resend"><a href="">Resend OTP</a></div>




<div className="allbtns">
<Button variant="primary" type="submit" className="btn logbutton currentactive" >
Login
  </Button>
     
      <a className="btn logbutton recievotp"   >Didn't receive OTP</a>
      </div>







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
      </Form>


      </div></div>




      </div>

      <div className="logbottom">

          <p>General Notes : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      </div>

      </div>

    
    </div>
  );
}



export default Otp;