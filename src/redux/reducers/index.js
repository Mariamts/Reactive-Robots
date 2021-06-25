import { combineReducers } from 'redux';
import { resourcesReducer } from './resources-reducer';
import { roboReducer } from './robo-reducers';

import { userReducer } from './userReducer';
import { usersReducer } from './users-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  robots: roboReducer,
  // users list
  users: usersReducer,
  resources: resourcesReducer,
});

export default rootReducer;
