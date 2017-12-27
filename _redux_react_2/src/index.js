import React from 'react';
import ReactDOM from 'react-dom';

import DevTools from './containers/DevTools';
import { createStore } from 'redux';
import appReducer from './reducers';
import { createUser, createPost } from './actions';
import App from './App';
import './components/styles/Post.css';

let store = createStore(appReducer, {}, DevTools.instrument());

store.dispatch(createUser('bnoden', 'Brandon Oden'));
store.dispatch(createUser('midimaster2000', 'Yoko Shimomura'));
store.dispatch(createUser('golbez4u', 'Nobuo Uematsu'));
store.dispatch(createUser('ProtoMan', '00000000'));

setTimeout(() => {
  store.dispatch(
    createPost('bnoden', {
      title: '@midimaster2000 Merry Christmas!',
      text: (
        <div className="intrinsic-container intrinsic-container-16x9">
          <iframe src="https://bnoden.github.io/season/" allowFullScreen />
        </div>
      ),
      category: 'welcome'
    })
  );
}, 1200);

setTimeout(() => {
  store.dispatch(
    createPost('midimaster2000', {
      title: 'メリークリスマス！',
      text: (
        <iframe
          width="80%"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/276483323&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
        />
      ),
      category: 'test'
    })
  );
}, 3800);

setTimeout(() => {
  store.dispatch(
    createPost('golbez4u', {
      title: 'Haha',
      text: <img src="https://pbs.twimg.com/media/C5-3AqlU0AAee7t.jpg" />,
      category: 'test'
    })
  );
}, 6600);

let protonum = 0;
const protoPost = () => {
  const ppost = '0x' + protonum.toString(16).toUpperCase();
  store.dispatch(
    createPost('ProtoMan', {
      title: ppost,
      text: '0b' + protonum.toString(2),
      category: 'test'
    })
  );
  ++protonum;
};

document.body.onclick = () => {
  protoPost();
};

console.log('initial state:', store.getState());
store.subscribe(() => console.log('state changed:', store.getState()));

ReactDOM.render(<App store={store} />, document.getElementById('root'));
