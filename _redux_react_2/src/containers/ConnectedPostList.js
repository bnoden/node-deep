import { connect } from 'react-redux';
import PostList from '../components/PostList';

const mapStateToProps = (state, props) => {
  const filteredPosts = state.filter
    ? state.posts.filter(post => post.category === state.filter)
    : state.posts;

  return {
    posts: filteredPosts.map(post => {
      const { user, ...rest } = post;
      const userObj = state.users.find(({ username }) => user === username);
      return {
        user: userObj,
        ...rest
      };
    })
  };
};

const ConnectedPostList = connect(mapStateToProps)(PostList);
// Maintain position after new post
const MIN_POST_HEIGHT = 238;
let prevHeight = document.body.clientHeight;
const maintainPosition = setInterval(
  (x = window.scrollX, y = window.scrollY) => {
    let diff = document.body.clientHeight - prevHeight;

    y = y < MIN_POST_HEIGHT ? y + diff : y;
    window.scroll(x, y);
    prevHeight = document.body.clientHeight;
  },
  100
);

const getPositionTop = _post => {
  return _post.getBoundingClientRect().top;
};
const getPositionBottom = _post => {
  return _post.getBoundingClientRect().bottom;
};

const openClose = e => {
  if (e.classList.contains('closed')) {
    e.classList.remove('closed');
    e.classList.add('opened');
    open = 1;
  } else if (e.classList.contains('opened')) {
    e.classList.remove('opened');
    e.classList.add('closed');
  }
};

const postPosition = setInterval(() => {
  const plist = document.querySelectorAll('.Post');
  const hlist = document.querySelectorAll('.post-head');
  const clist = document.querySelectorAll('.post-content');
  const plen = plist.length;
  let pTop = 0.0,
    pBottom = 0.0,
    prev = 0.0;
  for (let i = 0; i < plen; i++) {
    prev = getPositionTop(hlist[i]);
    hlist[i].onclick = () => {
      openClose(clist[i]);
    };
    plist[i].ondblclick = () => {
      plist[i].classList.add('closed');
    };

    if (getPositionTop(hlist[i]) < prev) {
      let x = window.scrollX;
      let y = getPositionTop(hlist[i]);
      window.scroll(x, y);
    }

    pTop = getPositionTop(plist[i]);
    pBottom = getPositionBottom(plist[i]);

    if (
      pTop > 0 &&
      pTop < MIN_POST_HEIGHT &&
      clist[i].classList.contains('opened')
    ) {
      plist[i].classList.add('focus');
    } else {
      plist[i].classList.remove('focus');
    }
  }
}, 250);

export default ConnectedPostList;
