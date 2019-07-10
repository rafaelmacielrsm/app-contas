import { IReduxAction } from '../../app-types/redux-types';
import C from '../../app-types/actionTypes';
import { combineReducers } from 'redux';


/**
 * Reducer to the fetching boolean variable
 * @param {boolean} [state]  current state in the app store
 * @returns next state after the redux action takes effect
 */
const fetching = ( state : boolean = false, action: IReduxAction ) : boolean => {
  switch ( action.type ) {
    case C.FETCHING:
      return true;
  
    case C.CANCEL_FETCHING:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  fetching: fetching
})