import React from 'react';
import { Provider } from 'react-redux';
import createReduxStore from './datastore';
import Dashboard from './components/Dashboard/Dashboard';

const store = createReduxStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
