import React, { useEffect, useState } from 'react';
import {Navbar,Nav,Container,Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { LOGOUT } from '../constants/actionTypes';
import Tasks from './Tasks';


const Home = () => {

  

    let [loggedin,setLoggedin] = useState(JSON.parse(localStorage.getItem('profile')));
    let dispatch = useDispatch();
    let navigate = useNavigate();
   
    let logout = () => {
      dispatch({type:LOGOUT});
      setLoggedin(null);
      navigate('/login');
    }

    
    return (
    <div>
           <Navbar collapseOnSelect style={{backgroundColor : "#003343",size:"30px"}} >
  <Container >
  <Navbar.Brand href="#home" style={{color:"white",fontStyle:"oblique"}}><h2>Home Page</h2></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
  { ! loggedin ? <>
    <Nav style={{paddingLeft : "200px"}}>
      <Nav.Link href="/login"><Button variant="warning" size='lg'  >Login</Button></Nav.Link>
      
    </Nav>
    <Nav style={{paddingLeft : "200px"}}>
      <Nav.Link href="/signup"><Button variant="primary" size='lg' >SignUp</Button></Nav.Link>
      
    </Nav>
    </> 
    : 
    <>
    <Nav style={{paddingLeft : "300px"}}>
      <Nav.Link ><Button variant="warning" size='lg' onClick={logout} >Logout</Button></Nav.Link>
      
    </Nav>
    
    </>
    }
    <Nav style={{paddingLeft : "200px"}}>
      <Nav.Link href="/task"><Button variant="danger" size='lg' >Add Task</Button></Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

<br></br>
<br></br>
<br></br>
<Navbar collapseOnSelect  >
  <Container style={{backgroundColor : "gold",size:"30px"}} >
  <Navbar.Brand  style={{color:"white",fontStyle:"oblique",paddingLeft:"550px"}}><h2 >Tasks :</h2></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  
  </Navbar.Collapse>
  </Container>
</Navbar>


<br></br>
<br></br>
<br></br>

<Tasks></Tasks>

    </div>
  )
}

export default Home