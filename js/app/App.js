import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import navigationApp from './reducers';
import AppContainer from './AppContainer';

const store = createStore(navigationApp);

const App = (props) => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
