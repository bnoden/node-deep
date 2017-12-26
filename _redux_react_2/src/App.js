import React from 'react';
import { Provider } from 'react-redux';

import DevTools from './containers/DevTools';
import ConnectedPostList from './containers/ConnectedPostList';
import ConnectedFilterList from './containers/ConnectedFilterList';
import './App.css';

const App = ({ store }) =>
  <Provider store={store}>
    <div className="App">
      <h1>uSeddit</h1>
      <div>
        <ConnectedFilterList />
      </div>
      <div>
        <ConnectedPostList />
      </div>
      <DevTools />
    </div>
  </Provider>;

export default App;
