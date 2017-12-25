import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

import appReducer from './reducers';
import { createUser, createPost } from './actions';
import App from './App';

let store = createStore(appReducer);

store.dispatch(createUser('bnoden', 'Brandon Oden'));
store.dispatch(createUser('midimaster2000', 'Yoko Shimimura'));
store.dispatch(createUser('golbez4u', 'Nobuo Uematsu'));

store.dispatch(
  createPost('bnoden', {
    title: 'first',
    text: 'inb4 all',
    category: 'welcome'
  })
);
setTimeout(() => {
  store.dispatch(
    createPost('midimaster2000', {
      title: 'first',
      text: 'first post',
      category: 'test'
    })
  );
}, 3700);
setTimeout(() => {
  store.dispatch(
    createPost('golbez4u', {
      title: 'Haha',
      text: "ninja'd",
      category: 'test'
    })
  );
}, 7600);

console.log('initial state:', store.getState());
store.subscribe(() => console.log('state changed:', store.getState()));

ReactDOM.render(<App store={store} />, document.getElementById('root'));
