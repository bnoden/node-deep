import React from 'react';

const Post = ({ user='user', text }) =>
  <span>
    <b>{user}</b>: {text}
  </span>;

export default Post;
