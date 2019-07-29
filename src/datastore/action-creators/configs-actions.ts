import { IReduxAction } from '../../app-types/redux-types';
import C from '../../app-types/actionTypes';

const setRatioConfig = ( ratio: number[] ) : IReduxAction=> ({
  type: C.SET_RATIO_CONFIG,
  payload: ratio
})

const setUsersConfig = ( users: {} ): IReduxAction => ({
  type: C.SET_USERS_CONFIG,
  payload: users
});

export {
  setRatioConfig,
  setUsersConfig
}