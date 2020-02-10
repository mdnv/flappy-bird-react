import React, { Component } from 'react'

// import { Link } from "react-router-dom";

import axios from 'axios';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: ''
    }
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    // fetch(`http://localhost:3000/api/articles/${id}`).
    //   then((response) => response.json()).
    //   then((post) => this.setState({ ...post }));
    var self = this;
    axios.get(`http://localhost:3000/api/articles/${id}`)
    .then(function (response) {
      // handle success
      self.setState({ post: response.data.article });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  updatePostRequest = (event) => {
    fetch(`http://localhost:3000/api/articles/${this.state.post.id}`, {
      method: 'put',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      alert('Post updated successfully');
      window.location.href = '/';
    });
  }

  render() {
    const {title, text} = this.state;
    return (
      <React.Fragment>
        <h3>Edit Article</h3>
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
        <button onClick={this.updatePostRequest}>Update</button>
      </React.Fragment>
    );
  }
}

export default Edit;
