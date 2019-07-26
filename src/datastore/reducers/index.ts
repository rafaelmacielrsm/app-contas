import { IReduxAction } from '../../app-types/redux-types';
import C from '../../app-types/actionTypes';
import { combineReducers } from 'redux';

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

const synchedAt = ( state: number = 0, action: IReduxAction ) : number => {
  switch ( action.type ) {
    case C.SET_SYNC_DATE:
      return Date.now()
    default:
      return state
  }
}

export default combineReducers({
  fetching: fetching,
  synchedAt: synchedAt
})