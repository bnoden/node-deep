import { CREATE_POST, EDIT_POST, SET_FILTER } from './actionTypes';

const date = new Date();
const timestamp = date.getTime();

export const createPost = (user, text) => {
  return {
    type: CREATE_POST,
    timestamp,
    user,
    text
  };
};

export const editPost = (id, text) => {
  return {
    type: EDIT_POST,
    timestamp,
    id,
    text
  };
};

export const setFilter = filter => {
  return {
    type: SET_FILTER,
    filter
  };
};
