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
  
  // export const maintainPosition = () => {
  //   let prevHeight = document.body.clientHeight;
  //   setInterval((x, y) => {
  //     if (prevHeight !== document.body.clientHeight) {
  //       x = window.scrollX;
  //       y = window.scrollY + document.body.clientHeight - prevHeight;
  //       window.scrollTo(x, y);
  //     }
  //   }, 100);
  // };

export default App;
