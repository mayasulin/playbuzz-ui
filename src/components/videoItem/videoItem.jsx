import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./panel.css";

class VideoItem extends Component {
  state = {};

  render() {
    return (
      <div className="viewer-dim viewer-border viewer-color">
        <div className="video-titles">
          <span className="title title-position-left">
            {this.props.info.title}
          </span>
          <span className="title title-position-right">
            {this.getViews(this.props.info.views)}
          </span>
        </div>
        <ReactPlayer
          url={this.props.info.url}
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1,
                controls: 1,
                showinfo: 0
              }
            },
            facebook: {
              appId: "420240272057124"
            }
          }}
          height="220px"
          width="400px"
        />
      </div>
    );
  }

  getViews(views) {
    var si = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/; //check if its a valid number
    var i;
    for (i = si.length - 1; i > 0; i--) {
      if (views >= si[i].value) {
        break;
      }
    }
    return (views / si[i].value).toFixed(2).replace(rx, "$1") + si[i].symbol;
  }
}

export default VideoItem;
