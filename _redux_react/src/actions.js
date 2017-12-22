import { CREATE_POST, EDIT_POST, SET_FILTER } from './actionTypes';

export const createPost = (user, text) => {
  return {
    type: CREATE_POST,
    user,
    text,
    timestamp: new Date()
  };
};

export const editPost = (id, text) => {
  return {
    type: EDIT_POST,
    user,
    id,
    timestamp: new Date()
  };
};

export const setFilter = filter => {
  return {
    type: SET_FILTER,
    filter
  };
};
