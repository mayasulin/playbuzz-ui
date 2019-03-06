import React, { Component } from "react";
import VideoItem from "../videoItem/videoItem";
import ItemNotFound from "../itemNotFound/itemNotFound";
import "./listStyle.css";

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          title: "How to prepare a great beer",
          type: "video",
          source: "facebook",
          videoId: "1052114818157758",
          views: 4569654
        }
      ],
      expectedKeys: ["title", "views", "videoId"],
      urlExtensions: {
        facebook: "https://www.facebook.com/facebook/videos/",
        youtube: "https://www.youtube.com/embed/",
        itemNotFound: "../../img/video404.gif"
      }
    };
  }

  render() {
    return (
      <ul className="video-list">
        {this.mapArrayToDom().map((value, i) => {
          return this.buildDom(value, i);
        })}
      </ul>
    );
  }

  mapArrayToDom() {
    const { urlExtensions } = this.state;
    const self = this;
    return this.props.items.map(function(value, index) {
      if (!self.checkItemKeys(Object.keys(value))) {
        return {
          url: urlExtensions["itemNotFound"],
          valid: false
        };
      }

      return {
        title: value.title,
        views: value.views,
        url: urlExtensions[value.source] + value["videoId"],
        valid: true
      };
    });
  }

  checkItemKeys(itemKeys) {
    let { expectedKeys } = this.state;

    return expectedKeys.every(val => {
      return itemKeys.indexOf(val) >= 0;
    });
  }

  buildDom(item, index) {
    if (item.valid) {
      return (
        <li key={index}>
          <VideoItem info={item} />
        </li>
      );
    } else {
      return (
        <li key={index}>
          <ItemNotFound info={item} />
        </li>
      );
    }
  }
}

export default VideoList;
