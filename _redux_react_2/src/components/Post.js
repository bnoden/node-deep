import React from 'react';

import User from './User';
import Timestamp, { timePosted } from './Timestamp';
import './styles/Post.css';

const Post = ({ user, title, text, category, created, updated }) =>
  <div className="Post input fadeIn" style={postStyle}>
    <div>
      <div className="post-head" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <b>
            {title}
          </b>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '12px' }}>
            <a href="javascript:void(0)">
              <User {...user} />
            </a>
          </div>
          <div
            style={{
              fontSize: '9px',
              color: '#73ABD1',
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <br />
            <i>
              <Timestamp data={created} />
            </i>
          </div>
        </div>
      </div>
      <div className="post-content closed fadeIn">
        <hr />
        {text}
      </div>
    </div>
  </div>;

const postStyle = {
  fontSize: '14px',
  lineHeight: 1.4,
  borderStyle: 'solid',
  borderRadius: '4px',
  margin: '2px',
  padding: '2px',
  fontFamily: 'Verdana, Ariel'
};

export default Post;
