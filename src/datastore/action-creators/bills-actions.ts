import { IReduxAction, IBill } from '../../app-types/redux-types';
import C from '../../app-types/actionTypes';

export const setBills = ( bills:Array<IBill> ): IReduxAction => ({
  type: C.SET_BILLS,
  payload: bills
})

export const modifyBill = ( index: number, bill: IBill ):IReduxAction => ({
  type: C.CHANGE_BILL,
  payload: { index, data: bill }
})