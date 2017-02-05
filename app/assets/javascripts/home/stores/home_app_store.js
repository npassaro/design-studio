import { createStore } from 'redux';
import homeAppReducer from '../reducers/home_app_reducer';

const store = createStore(homeAppReducer);
export default store;
