import { IReduxAction, IExpenseGroup } from '../../app-types/redux-types';
import C from '../../app-types/actionTypes';

const setExpenseGroups = ( expenses : IExpenseGroup[] ) : IReduxAction => ({
  type: C.SET_EXPENSE_GROUPS,
  payload: expenses
})

const modifyExpenseGroup = ( index: number, expense: IExpenseGroup ) : IReduxAction => ({
  type: C.CHANGE_EXPENSE_GROUP,
  payload: {
    index,
    data: expense
  }
});

export {
  setExpenseGroups,
  modifyExpenseGroup
}