import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';

const rootReducer = combineReducers({
  Home: HomeReducer,
});

export default rootReducer;
