import { createStore } from 'redux';
import React from 'react';

import { createPost } from './actions';
import appReducer from './reducers';
import { Intro } from './components/Intro';
import Timer from './components/Timer';
// import Post from './components/Post.js';
// import PostList from './components/PostList.js';
import ConnectedPostList from './containers/ConnectedPostList';

let store = createStore(appReducer);

store.dispatch(createPost('bnoden', 'inb4 all'));
setTimeout(() => store.dispatch(createPost('midimaster2000', "ninja'd")), 1500);
setTimeout(() => store.dispatch(createPost('golbez4u', 'lol u2')), 3500);

// const posts = [
//   { user: 'bnoden', text: 'inb4 all' },
//   { user: 'midimaster2000', text: "ninja'd" },
//   { user: 'golbez4u', text: 'lol u2' }
// ];

const App = () =>
  <div className="App">
    <Intro />
    <Timer />
    <ConnectedPostList store={store} />
  </div>;

export default App;
