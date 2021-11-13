import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, deletePost, editPost } from '../actions/postActions';
import './../css/components/posts.css';
import {EditPostModal} from './EditPostModal';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.editPost = this.editPost.bind(this);
  }
  componentWillMount() {
    console.log('Why am I being called?');
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  deletePost(post) {
    this.props.deletePost(post.id);
  }
  editPost(post) {
    this.props.editPost(post);
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <tr key={post.id}>
        <td>{post.title}</td>
        <td>{post.body}</td>
        <td><button onClick={() => this.deletePost(post)}> Delete ? </button></td>
        <td><EditPostModal post={post} id={post.id} editPost={this.editPost} /></td>
      </tr>
    ));
    return (
      <div className="posts-box">
        <h1>Posts</h1>
        <table>
          <tr className="table-header">
            <td>Title</td>
            <td>Body</td>
          </tr>
          {postItems}
        </table>
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts, deletePost, editPost })(Posts);
