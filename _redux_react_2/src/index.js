import React from 'react';
import ReactDOM from 'react-dom';

import DevTools from './containers/DevTools';
import { createStore } from 'redux';
import appReducer from './reducers';
import { createUser, createPost } from './actions';
import App from './App';

let store = createStore(appReducer, {}, DevTools.instrument());

store.dispatch(createUser('bnoden', 'Brandon Oden'));
store.dispatch(createUser('midimaster2000', 'Yoko Shimomura'));
store.dispatch(createUser('golbez4u', 'Nobuo Uematsu'));

setTimeout(() => {
  store.dispatch(
    createPost('bnoden', {
      title: '@midimaster2000 Merry Christmas!',
      text: <div className="intrinsic-container intrinsic-container-16x9"><iframe src="https://bnoden.github.io/season/" allowFullScreen></iframe></div>,
      category: 'welcome'
    })
  );
}, 1800)
setTimeout(() => {
  store.dispatch(
    createPost('midimaster2000', {
      title: 'メリークリスマス！',
      text: <iframe width="80%" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/276483323&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>,
      category: 'test'
    })
  );
}, 6200);
setTimeout(() => {
  store.dispatch(
    createPost('golbez4u', {
      title: 'Haha',
      text: <img src="https://pbs.twimg.com/media/C5-3AqlU0AAee7t.jpg" />,
      category: 'test'
    })
  );
}, 12700);

console.log('initial state:', store.getState());
store.subscribe(() => console.log('state changed:', store.getState()));

ReactDOM.render(<App store={store} />, document.getElementById('root'));
