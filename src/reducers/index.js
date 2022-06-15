import {combineReducers } from 'redux';

import auth from './auth';
import tasks from './task';

export default combineReducers({
    tasks : tasks,
    auth : auth
})