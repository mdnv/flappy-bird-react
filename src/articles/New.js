import React, { Component } from 'react'
// import {Redirect} from 'react-router-dom';
// import axios from 'axios';

class New extends Component {
    constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  createPostRequest = (event) => {
    console.log('this.state', this.state);
    // fetch('/api/v1/posts', {
    //   method: 'post',
    //   body: JSON.stringify(this.state),
    //   headers: { 'Content-Type': 'application/json' },
    // }).then((response) => {
    //   alert('Post created successfully');
    //   location.href = '/';
    // });
  }

  render() {
    const {title, text} = this.state;
    return (
      <React.Fragment>
        <h3>New Post</h3>
        <div>
          <label>Title: </label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>Text: </label>
          <input
            type='text'
            name='text'
            value={text}
            onChange={this.handleInputChange}
            />
        </div>
        <button onClick={this.createPostRequest}>Create</button>
      </React.Fragment>
    );
  }
}

export default New;
