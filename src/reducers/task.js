import { CREATE, GET, UPDATE, DELETE } from "../constants/actionTypes";


const taskReducer = (tasks = [],action) => {
    switch(action.type) {

        case GET :
            return action.payload;

        case DELETE :
            return tasks.filter((task) => task._id !== action.payload.id);

        case UPDATE : 
            return tasks.map((task) => task._id === action.payload._id ? action.payload : task);

        case CREATE :
            return [...tasks,action.payload];

        default :
            return tasks;


    }

};

export default taskReducer;