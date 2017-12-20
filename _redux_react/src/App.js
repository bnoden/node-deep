import React from 'react';

import { Intro } from './components/Intro';
import Timer from './components/Timer';
// import Post from './components/Post.js';
import PostList from './components/PostList.js';

const posts = [
  { user: 'bnoden', text: 'inb4 all' },
  { user: 'midimaster2000', text: "ninja'd" },
  { user: 'golbez4u', text: 'lol u2' }
];

const App = () =>
  <div className="App">
    <Intro />
    <Timer />
    <PostList posts={posts} />
  </div>;

export default App;
