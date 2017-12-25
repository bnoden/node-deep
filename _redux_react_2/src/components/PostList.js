import React from 'react';
import Post from './Post';

const PostList = ({ posts }) =>
  <ul style={{listStyleType: 'none'}}>
    {posts.map((post, i) =>
      <li key={i.toString() }>
        <Post {...post} />
      </li>
    )}
  </ul>;

export default PostList;
