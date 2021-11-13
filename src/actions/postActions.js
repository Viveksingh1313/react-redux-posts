import { FETCH_POSTS, NEW_POST, DELETE_POST, EDIT_POST } from './types';

export const fetchPosts = () => dispatch => {
  const initialPosts = [
    { 
      id: 1,
      title:'Greet',
      body:'hey you how you doing ?'
    },
    {
      id: 2,
      title:'Goodbyes',
      body:'When can I see you again ?'
    }
  ]
  dispatch({
      type: FETCH_POSTS,
      payload: initialPosts
    })
};

export const createPost = postData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};

export const deletePost = id => dispatch => {
  dispatch({
    type: DELETE_POST,
    payload: id
  })
};

export const editPost = postData => dispatch => {
  console.log('Hello'+JSON.stringify(postData));
  dispatch({
    type: EDIT_POST,
    payload: postData
  })
};