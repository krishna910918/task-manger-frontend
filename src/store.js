
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

let store = createStore(reducers,compose(applyMiddleware(thunk)));

export default store;