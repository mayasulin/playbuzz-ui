import React, { Component } from "react";
import Title from "../pageTitle/title";
import VideoList from "../videoList/videoList";
import Filter from "../filter/filter";

const videoService = require("../../services/videoService.js");

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterCategories: ["facebook", "youtube"],
      videos: {},
      loading: true
    };
  }

  render() {
    return this.buildUI();
  }

  componentDidMount() {
    const self = this;
    videoService.getVideos().then(res => {
      self.setState({
        videos: res.data,
        loading: false
      });
    });
  }

  buildUI() {
    if (this.state.loading) {
      return <div>loading... </div>;
    } else {
      return (
        <React.Fragment>
          <Title text="video feed" />
          <Filter
            categories={this.state.filterCategories}
            updateList={this.handleListChange}
          />
          <VideoList items={this.state.videos} />
        </React.Fragment>
      );
    }
  }

  handleListChange = videoList => {
    this.setState({
      videos: videoList
    });
  };
}

export default Landing;
