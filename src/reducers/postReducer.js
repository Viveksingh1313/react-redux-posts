import { DELETE_POST, EDIT_POST, FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    case DELETE_POST:
      const posts =  state.items.filter((post) => post.id!=action.payload)
      return {
        ...state,
        items: posts
      };
    case EDIT_POST:
      var posts = state.items.map(post => {
        if(post.id !== action.payload.id)
          return post;
        else {
          post = {
            title: action.payload.title,
            body: action.payload.body
          }
          return post;
        }
      })
      return {
        ...state,
        items:posts
      };
    default:
      return state;
  }
}
