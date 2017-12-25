import React from 'react';
import { Provider } from 'react-redux';

import ConnectedPostList from './containers/ConnectedPostList';
import ConnectedFilterList from './containers/ConnectedFilterList';

const App = ({ store }) =>
  <Provider store={store}>
    <div>
      <h1>uSeddit</h1>
      <div>
        <ConnectedFilterList />
      </div>
      <div>
        <ConnectedPostList />
      </div>
    </div>
  </Provider>;

export default App;
