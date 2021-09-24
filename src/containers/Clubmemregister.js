import React from 'react';
import './Leap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';
import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';
function Clubmemregister() {
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
            <Form>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="logaccount">
                    <h4 className="log-head"> Get Started</h4>


                    <Form.Group className="form-group" >
    <Form.Label>Organization  </Form.Label>
    <Form.Control type="text"  />
 
  </Form.Group>

                  
  <Form.Group className="form-group" >
  <Form.Label>Department  </Form.Label>
  <Form.Select>
  <option selected>Finance</option>
                        <option >Others</option>
  </Form.Select>
  </Form.Group>

                    

                    <Form.Group className="form-group" >
    <Form.Label>Designation  </Form.Label>
    <Form.Control type="text"  />
 
  </Form.Group>



  <FormGroup className="form-group">
     <Form.Label>Enter Name</Form.Label>

     <InputGroup >
    <InputGroup.Text id="basic-addon1">Mr</InputGroup.Text>
    <FormControl

      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  </FormGroup >



  <FormGroup className="form-group">
     <Form.Label>Mobile Number </Form.Label>

     <InputGroup >
    <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
    <FormControl

      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  </FormGroup >
                  </div>
                </div>
                
                
                
                 <div className="col-12 col-md-6">
                  <div className="logaccount">
                    <div className="rightinputs">
                 
      <Form.Group className="form-group" >
    <Form.Label>User Name   </Form.Label>
    <Form.Control type="text"  />
 
  </Form.Group>



      <Form.Group className="form-group" >
    <Form.Label>Password  <span class="info">
    <FontAwesomeIcon icon={faInfoCircle} /> </span> </Form.Label>
    <Form.Control type="password"  />
 
  </Form.Group>



  <Form.Group className="form-group" >
    <Form.Label>Confirm Password   </Form.Label>
    <Form.Control type="password"  />
 
  </Form.Group>

                     	  
  <Form.Group className="form-group" >
    <Form.Label>Email Id   </Form.Label>
    <Form.Control type="text"  />
 
  </Form.Group>

                      <div className="allbtns">
                      <Button variant="primary" type="submit" className="btn logbutton currentactive" >
Next
  </Button>
                      </div>
                    </div>
                    <span class="inforight">
                      <FontAwesomeIcon icon={faInfoCircle} />
                    </span>
                  </div>
                </div>  </div>
                </Form>
            </div></div>
        </div>
      </div>
    </div>
  );
}



export default Clubmemregister;