import React, { Component } from "react";
import logo from '../logo.svg';
import avatar from '../83067587_199515441229363_7409123287759847424_o.jpg';

class Home extends Component {
  render() {
    return (
        <div>
        <div className="center jumbotron">
            <a className="btn btn-lg btn-primary" href="https://adifaker.000webhostapp.com/" target="_blank">adifaker</a>
            <a className="btn btn-lg btn-warning" href="https://clotheshub.herokuapp.com/" target="_blank">clotheshub</a>
            <a className="btn btn-lg btn-success" href="https://mdnv.github.io/" target="_blank">blog</a>
            <a className="btn btn-lg btn-primary" href="https://www.facebook.com/profile.php?id=100035127246410" target="_blank">facebook</a>
            <a className="btn btn-lg btn-danger" href="https://www.youtube.com/channel/UCEpwKlaYn7Li3Nh_kQLmCTA" target="_blank">youtube</a>
            <a className="btn btn-lg btn-primary" href="https://www.linkedin.com/in/manh-nguyen-7b75b3144/" target="_blank">linkedin</a>
            <a className="btn btn-lg btn-warning" href="https://www.instagram.com/mdnvngg" target="_blank">instagram</a>
            <a className="btn btn-lg btn-info" href="https://twitter.com/mdnvng" target="_blank">twitter</a>
            <a className="btn btn-lg btn-primary" href="https://github.com/mdnv" target="_blank">github</a>
        </div>
        <a href="https://reactjs.org/" target="_blank"><img alt="Rails logo" width="70" src={logo} /></a>
        </div>
    );
  }
}

export default Home;
