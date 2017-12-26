import React from 'react';

import User from './User';
import Timestamp, { timePosted } from './Timestamp';
import './styles/Post.css';

const Post = ({ user, title, text, category, created, updated }) =>
  <div className="Post fadeIn" style={postStyle}>
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <b>
            {title}
          </b>
        </div>
        <div style={{display: 'flex', flexDirection: 'column-reverse'}}>
          <div style={{ fontSize: '14px' }}>
            <a href="javascript:void(0)">
              <User {...user} />
            </a>
          </div>
          <div
            style={{
              fontSize: '10px',
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
      <hr />
      {text}
    </div>
  </div>;

const postStyle = {
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
