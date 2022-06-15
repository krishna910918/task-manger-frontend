import React, { useState } from 'react';
import {Navbar,Nav,Container,Card,Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createTask,updateTask } from '../action/task';
import './Login.css';

const TaskForm = () => {

  let [task,setTask] = useState("");
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let handleTask = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  }

  let handleSubmit = (e) => {
    
    e.preventDefault();
   
    
    dispatch(createTask({task}))
    navigate('/');
    
  }

  return (
    <div>
             <Navbar collapseOnSelect style={{backgroundColor : "#003343",size:"30px"}} >
  <Container >
  <Navbar.Brand href="#home" style={{color:"white",fontStyle:"oblique",paddingLeft:"550px"}}><h2>Task Page</h2></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  
  </Navbar.Collapse>
  </Container>
</Navbar>

<div style={{paddingTop : "100px",paddingLeft : "550px"}} xs={12} sm={7}>
      <Card style={{ width: '28rem' ,paddingTop:"30px"}}>
        <h2 style={{color:'#003343'}} > Task Form </h2>
        <br></br>
      <form method='post'  onSubmit={handleSubmit} >
  
  <div >
    
    
    <br></br>
    <input className='input' type="text" placeholder='Task' onChange={handleTask} size='25' style={{padding:"10px"}}/>
    
  </div>

  
  

  <br></br>

  <button className='input' type="submit"   style={{backgroundColor:"#003343",color:"white",size:'25',padding: "10px 90px",display: "inline-block",border: "none"}} >Submit</button>
   </form>
   <br></br>
   <br></br>

   </Card>
    </div>
    </div>
  )
}

export default TaskForm