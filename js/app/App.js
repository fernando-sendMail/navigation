import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import navigationApp from './reducers';
import AppContainer from './AppContainer';

const enhancer = compose(devTools({
  name: 'navigation',
  hostname: 'localhost',
  port: 8000
}));

const store = createStore(navigationApp, enhancer);

const App = (props) => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
