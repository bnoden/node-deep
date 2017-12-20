import React from 'react';

import Post from './Post';

const PostList = ({ posts }) =>
  <ul>
    {posts.map((post, i) =>
      <li key={i.toString()} style={postStyle}>
        {' '}<Post {...post} />{' '}<br />
      </li>
    )}
  </ul>;

const postStyle = {
  listStyleType: 'none',
  fontSize: '20px',
  lineHeight: 1.4,
  backgroundColor: '#B3F5D4',
  display: 'inline'
};

export default PostList;
