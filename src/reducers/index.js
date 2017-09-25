import { combineReducers } from 'redux-immutable'
import { locations } from './locations'
import { services } from './services'

const rootReducer = combineReducers({
  locations,
  services
});

export default rootReducer
