export interface IReduxAction {
  type: string,
  payload?: any
}

export interface IReduxState {
  fecthing: boolean,
  lastSync: number
}