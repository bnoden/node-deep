import React from 'react';

import User from './User';
import Timestamp from './Timestamp';
import './styles/Post.css';

const Post = ({ user, title, text, category, created, updated }) =>
  <div style={postStyle}>
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <b>
            {title}
          </b>
        </div>
        <div style={{ fontSize: '14px' }}>
          <a href="javascript:void(0)">
            <User {...user} />
          </a>
        </div>
      </div>
      <hr />
      {text}
    </div>
    <div style={{ fontSize: '10px', color: '#73ABD1' }}>
      <br />
      <i>
        Created at: <Timestamp data={created} />, Updated at:{' '}
        <Timestamp data={updated} />
      </i>
    </div>
  </div>;

const postStyle = {
  maxWidth: '60%',
  height: 'auto',
  fontSize: '16px',
  lineHeight: 1.4,
  backgroundColor: '#E8F2FC',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: '#73ABD1',
  borderRadius: '4px',
  margin: '8px',
  padding: '8px',
  fontFamily: 'Verdana, Ariel'
};

export default Post;
