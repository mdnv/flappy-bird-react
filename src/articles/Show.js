import React, { Component } from 'react'
import axios from 'axios';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = { post: {} };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    // fetch(`/api/v1/posts/${id}`).
    //   then((response) => response.json()).
    //   then((post) => this.setState({ post }));
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

  render() {
    const { post } = this.state;
    return (
      <React.Fragment>
        <div>
          <label> Title </label>
          <p> {post.title} </p>
        </div>

        <div>
          <label> Text </label>
          <p> {post.text} </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Show;
