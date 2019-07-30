import { IReduxAction, IConfigs, IExpenseGroup, IBill } from '../../app-types/redux-types';
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

const ratio = ( 
  state: number[] = [ 0.5, 0.5 ], 
  action : IReduxAction ) : number[] => {

  switch ( action.type ) {
    case C.SET_RATIO_CONFIG:
      return action.payload;
    default:
      return state;
  }
  
}

const users = ( state : {}, action : IReduxAction ) : object => {
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

const expenseGroups = ( 
  state: Array<IExpenseGroup> = [], 
  action: IReduxAction ) : Array<IExpenseGroup> => {

  switch ( action.type ) {
    case C.SET_EXPENSE_GROUPS:
      return action.payload
    case C.CHANGE_EXPENSE_GROUP: 
      const { data, index } = action.payload;
      return state.map(( e, i ) => (
        i === index  
          ? { ...e, description: data.description, synched: false } 
          : e
      ))
    default:
      return state;
  }
}

const bills = ( state: Array<IBill> = [], action: IReduxAction ) => {
  switch ( action.type ) {
    case C.SET_BILLS:
      return action.payload;
    case C.CHANGE_BILL:
      const { data, index } = action.payload;
      return state.map(( e, i ) => (
        i === index  
          ? { ...e, ...data, isModified: true, isSynchronized: false } 
          : e
      ))
    default:
      return state;
  }
}

export default combineReducers({
  fetching,
  synchedAt,
  configs,
  expenseGroups,
  bills
})