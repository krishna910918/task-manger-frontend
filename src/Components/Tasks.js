import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../action/task';
import Task from './Task';
import TaskForm from './TaskForm';



const Tasks = () => {

    let dispatch = useDispatch();
   
   

    let tasks = useSelector((state) => state.tasks);
    console.log(tasks);

    useEffect(()=>{
        dispatch(getTasks());
    },[tasks]);

   

  return (
    <div>
        {
            tasks.map((task) => (
                <Task task={task} ></Task>
                
            ))
            
        }

    </div>
  )
}

export default Tasks