// store.js
import { createStore } from 'redux';
import reducer from './reducers';
import { createStoreHook } from 'react-redux';

const store = createStore(reducer); // Create Redux store with reducer

export default store;
