import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import { autoLoginMiddleware } from './middleware';
import rootReducer from './reducers';

const middleware = [autoLoginMiddleware];
const rootStore = createStore(rootReducer, applyMiddleware(...middleware));

export default rootStore;
