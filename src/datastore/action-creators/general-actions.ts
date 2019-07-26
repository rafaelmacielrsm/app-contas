import { IReduxAction } from '../../app-types/redux-types';
import C from '../../app-types/actionTypes';

const fetching = () : IReduxAction => ({
  type: C.FETCHING
})

const cancelFetching = () : IReduxAction => ({
  type: C.CANCEL_FETCHING
})

const setSynchedAt = () : IReduxAction => ({
  type: C.SET_SYNC_DATE
})

export {
  fetching,
  cancelFetching,
  setSynchedAt
}