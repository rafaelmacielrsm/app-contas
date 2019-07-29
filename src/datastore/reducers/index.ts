import { IReduxAction, IConfigs } from '../../app-types/redux-types';
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

const ratio = ( state: number[] = [ 0.5, 0.5 ], action : IReduxAction ) => {
  switch ( action.type ) {
    case C.SET_RATIO_CONFIG:
      return action.payload;
    default:
      return state;
  }
  
}

const users = ( state : {}, action : IReduxAction ) => {
  switch ( action.type ) {
    case C.SET_USERS_CONFIG:
      return action.payload
    default:
      return state;
  }
}

const configs = ( 
  state: IConfigs = { ratio: [ 0.5, 0.5 ], users: {'1': '', '2': '', 'all': ''}}, 
  action: IReduxAction ) : IConfigs => {

  return {
    ratio: ratio( state.ratio, action ),
    users: users( state.users, action )
  }
}

export default combineReducers({
  fetching,
  synchedAt,
  configs
})