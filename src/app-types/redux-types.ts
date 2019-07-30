export interface IReduxAction {
  type: string,
  payload?: any
}

export interface IBill {
  billId?: number,
  localBillId?: number,
  boughtAt: number,
  boughtFor: string,
  businessName: string,
  details: string,
  expenseGroup: number,
  isSynchronized: boolean,
  isModified: boolean,
  paidBy: string,
  value: number
}

export interface IConfigs {
  users: {
    '1'?: string,
    '2'?: string,
    'all'?: string
  },
  ratio: number[]
}

export interface IReduxState {
  fecthing: boolean,
  lastSync: number
}

export interface IExpenseGroup {
  description: string,
  id: number,
  localId: number,
  synched: boolean
}