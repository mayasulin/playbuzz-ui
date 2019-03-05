import React, { Component } from "react";
import Title from "../pageTitle/title";
import VideoList from "../videoList/videoList";

class Landing extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Title text="video feed" />
        <VideoList />
      </React.Fragment>
    );
  }
}

export default Landing;
