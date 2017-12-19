import { createStore } from 'redux';
import { createPost, editPost, setFilter } from './actions';
import appReducer from './reducers';

let store = createStore(appReducer);

const unsubscribe = store.subscribe(() => {
  console.log('state changed:', store.getState());
});

const root = document.querySelector('#root');
root.style.backgroundColor = '#B3F5D4';

const render = () => {
  root.innerText = '';
  const { posts } = store.getState();
  posts.forEach(post => {
    const item = document.createElement('li');
    item.style.listStyleType = 'none';
    
    const time_stamp = document.createElement('p');
    time_stamp.innerText = Date(post.timestamp);
    time_stamp.style.backgroundColor = '#F5B3B3';
    time_stamp.style.display = 'none';
    
    const text = document.createTextNode(post.user + ': ' + post.text);
    item.appendChild(time_stamp);
    item.appendChild(text);
    root.appendChild(item);
    
    item.addEventListener('click', () => {
      time_stamp.style.display = time_stamp.style.display === 'none' ? 'block' : 'none';
    });
  });
};

const stopRender = store.subscribe(render);

store.dispatch(createPost('bnoden', 'inb4 all'));

setTimeout(() => {
  store.dispatch(createPost('midimaster2000', "ninja'd"));
}, 3000);
setTimeout(() => {
  store.dispatch(createPost('golbez4u', 'lol u2'));
}, 8000);

// const storeStr = JSON.stringify(store.getState());
// const storeFormat = storeStr.split(/[{,}]/);
// for (let i in storeFormat) {
//   document.write(`<br />${storeFormat[i]}`);
// }

// console.log(store.getState());

// let state = appReducer(undefined, { type: 'INIT_ACTION' });
// console.log('initial state:', state);
//
// state = appReducer(state, createPost('bnoden', 'test'));
// console.log('state after createPost:', state);
//
// state = appReducer(state, editPost(0, 'edited post'));
// console.log('state after editPost:', state);
//
// state = appReducer(state, setFilter('none'));
// console.log('state after setFilter:', state);