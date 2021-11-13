import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editPost } from '../actions/postActions';
import './../css/components/posts.css'
import Modal from 'react-modal';

const customStyles = {
  content: {
    width: '50%',
    height: '50%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

//Modal.setAppElement('#posts');

export class EditPostModal extends Component {  
    constructor(props) {
      super(props);

      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        title: '',
        body: '',
        modalIsOpen: false
      }

    };
    
    openModal() {
      this.setState({modalIsOpen: true});
    }
  
    afterOpenModal() {
      
    }
  
    closeModal() {
      this.setState({modalIsOpen: false});
    }
  
    componentWillMount() {
      this.setState({title: this.props.post.title, body: this.props.post.body});
    }
    
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
      e.preventDefault();
      const post = {
        title : this.state.title,
        body : this.state.body,
        id: this.props.id
      }
      this.setState({modalIsOpen: false});
      this.props.editPost(post);
    }

    render() {
      const button = <button> Edit </button>;
      return(
        <div id ="idEditForm">
        <button onClick={this.openModal}>Edit Post</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.state.afterOpenModal}
          onRequestClose={this.state.closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>Close</button>
        
          <form className='modal-form-margin' onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div className="text-area-outer-div">
            <label>Body: </label>
            <br />
            <textarea className="text-area-modal"
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Update Post</button>
        </form>
        </Modal>
      </div>
      
     
    );
  }
}

