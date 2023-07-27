import { createStore } from 'redux';
import rootReducer from './reducers'; // assuming you have a root reducer file

const store = createStore(rootReducer);

export default store;