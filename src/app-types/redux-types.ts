export interface IReduxAction {
  type: string,
  payload?: any
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