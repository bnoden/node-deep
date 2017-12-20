import React from 'react';
import ReactDOM from 'react';

export const Intro = ({ name='user' }) =>
  <h1>
    Welcome, {name.toUpperCase()}!
  </h1>;
