import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import { CREATE, DELETE, GET, UPDATE } from '../constants/actionTypes';

export const createTask = (info) => async(dispatch) => {

    try{

        let {data} = await api.post('/task',info);

        dispatch({type:CREATE,payload:data.result});

       

    } catch (error) {
        console.log(error);
    }
}

export const getTasks = () => async(dispatch) => {
    try {

        let {data} = await api.get('/tasks');
        dispatch({type:GET,payload:data.tasks});
       
        

    } catch (error) {
        console.log(error)
    }
}

export const updateTask = (info,id) => async(dispatch) => {
    try {

        let {data} = await api.post(`/task/${id}`,info);
        dispatch({type:UPDATE,payload:data.result});

    } catch (error) {
        console.log(error);
    }
}

export const deleteTask = (id) => async(dispatch) => {
    try {

        await api.delete(`/task/${id}`);
        dispatch({type:DELETE,payload:id});

    } catch (error) {
        console.log(error);
    }
}
