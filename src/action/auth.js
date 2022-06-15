import api from '../api/api';
import { LOGIN, SIGNUP } from '../constants/actionTypes';


export const signin = (info) => async(dispatch) => {
    try {

        let {data} = await api.post('/auth/login', info);

        dispatch({type:LOGIN,payload:data});

       

    } catch (error) {
        console.log(error);
    }
}

export const signup = (info) => async(dispatch) => {
    try {

        let {data} = await api.post('/auth/signup',info);
        dispatch({type : SIGNUP,payload:data.result});

    } catch (error) {
        console.log(error);
    }
}

