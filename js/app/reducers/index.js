import { combineReducers } from 'redux';
import * as navigationReducers from './navigation';

export default combineReducers({
  ...navigationReducers
});
