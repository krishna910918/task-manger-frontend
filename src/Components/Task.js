import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../action/task';



const Task = ({task,setId}) => {

    let dispatch = useDispatch();
  return (
    <div>
        <Navbar collapseOnSelect  >
        <Container style={{backgroundColor : "grey",size:"30px"}}>
        <Navbar.Brand  style={{color:"white",fontStyle:"oblique"}}><h2 >{`${task.task}`}</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav style={{paddingLeft:"300px"}}>
            <Nav.Link  ><Button variant="success" size='lg'   style={{backgroundColor:"blue"}} >Edit</Button></Nav.Link>
            
          </Nav>
          <Nav style={{paddingLeft : "100px"}}>
            <Nav.Link ><Button variant="danger" size='lg' onClick = {() => dispatch(deleteTask(task._id))} style={{backgroundColor:"red"}} >Delete</Button></Nav.Link>
            
          </Nav>
        
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Task