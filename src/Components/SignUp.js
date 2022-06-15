import React, { useState } from 'react';
import {Navbar,Nav,Container,Card,Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../action/auth';

import './Login.css';

const SignUp = () => {

  let [name,setName] = useState("");
  let [email,setEmail] = useState("");
  let [password,setPassword] = useState("");

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({name,email,password}));
    navigate('/');

  }
  
  return (
    <div>
         <Navbar collapseOnSelect style={{backgroundColor : "#003343",size:"30px"}} >
  <Container >
  <Navbar.Brand href="#home" style={{color:"white",fontStyle:"oblique",paddingLeft:"550px"}}><h2>SignUp Page</h2></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  
  </Navbar.Collapse>
  </Container>
</Navbar>

<div style={{paddingTop : "100px",paddingLeft : "550px"}} xs={12} sm={7}>
      <Card style={{ width: '28rem' ,paddingTop:"30px"}}>
        <h2 style={{color:'#003343'}} > Sign Up Form</h2>
        <br></br>
      <form method='post' onSubmit = {handleSubmit} action='/login' >
  
  <div >
    
    
    <br></br>
    <input className='input' type="text" onChange={handleName} placeholder='Name' size='25' style={{padding:"10px"}}/>
    
  </div>

  <div >
    
    
    <br></br>
    <input className='input' type="email" onChange = {handleEmail} placeholder='Email Address' size='25' style={{padding:"10px"}}/>
    
  </div>


  
  <div >
   
    <br></br>
    <input className='input' type="password"  onChange = {handlePassword} placeholder='Password' size='25' style={{padding:"10px"}} />
   
  </div>

  <br></br>

  <button className='input' type="submit"   style={{backgroundColor:"#003343",color:"white",size:'25',padding: "10px 90px",display: "inline-block",border: "none"}} >Sign Up</button>
   </form>
   <br></br>
   <br></br>

   </Card>
    </div>
    </div>
  )
}

export default SignUp