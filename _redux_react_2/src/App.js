import React from 'react';

import ConnectedPostList from './containers/ConnectedPostList';
import ConnectedFilterList from './containers/ConnectedFilterList';

const App = ({ store }) =>
  <div>
    <h1>uSeddit</h1>
    <div>
      <ConnectedFilterList store={store} />
    </div>
    <div>
      <ConnectedPostList store={store} />
    </div>
  </div>;

export default App;
