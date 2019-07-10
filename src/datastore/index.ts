import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers';

/**
 * Creates a redux data store and apply middleware: `redux-thunk`
 * @param {object} [initialState] - Data Object to bootstrap the redux-store's 
 * state
 * @returns - Redux DataStore
 */
const createReduxStore = ( initialState: object = {} ) => (
  createStore(
    appReducer,
    initialState,
    ( process.env.NODE_ENV === 'development'
      ? composeWithDevTools(applyMiddleware(thunkMiddleware))
      : applyMiddleware( thunkMiddleware )
    ),
  )
);

export default createReduxStore;