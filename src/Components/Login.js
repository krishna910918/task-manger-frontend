import React, { useState,useEffect } from 'react'
import {Navbar,Nav,Container,Card,Button, Form} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { signin } from '../action/auth';
import './Login.css';



const Login = () => {

  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');

  let dispatch = useDispatch();
  let navigate = useNavigate();
  

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
    dispatch(signin({email,password}));
   navigate('/');
   


  }

  
  return (
    <div>
      <Navbar collapseOnSelect style={{backgroundColor : "#003343",size:"30px"}} >
  <Container >
  <Navbar.Brand  style={{color:"white",fontStyle:"oblique",paddingLeft:"550px"}}><h2 >Login Page</h2></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  
  </Navbar.Collapse>
  </Container>
</Navbar>

<div style={{paddingTop : "100px",paddingLeft : "550px"}} xs={12} sm={7}>
      <Card style={{ width: '28rem' ,paddingTop:"30px"}}>
        <h2 style={{color:'#003343'}} > Login Form </h2>
        <br></br>
      <form method='post' onSubmit = {handleSubmit}  >
  
  <div >
    
    
    <br></br>
    <input className='input' type="email" placeholder='Email Address' onChange = {handleEmail} size='25' style={{padding:"10px"}}/>
    
  </div>

  
  <div >
   
    <br></br>
    <input className='input' type="password"  placeholder='Password' onChange = {handlePassword} size='25' style={{padding:"10px"}} />
   
  </div>

  <br></br>

  <button className='input' type="submit"   style={{backgroundColor:"#003343",color:"white",size:'25',padding: "10px 90px",display: "inline-block",border: "none"}} >Login</button>
   </form>
   <br></br>
   <br></br>

   </Card>
    </div>
    </div>
  )
}

export default Login