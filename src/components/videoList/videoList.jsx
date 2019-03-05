import React, { Component } from "react";
import VideoItem from "../videoItem/videoItem";
import ItemNotFound from "../itemNotFound/itemNotFound";
import "./listStyle.css";

class VideoList extends Component {
  state = {
    items: [
      {
        title: "How to prepare a great beer",
        type: "video",
        source: "facebook",
        videoId: "1052114818157758",
        views: 4569654
      },
      {
        type: "video",
        source: "url",
        url: "http://cdn.playbuzz.com/content/feed/video-1.mp4",
        views: 8820
      },
      {
        title: "Be a winner!",
        type: "video",
        source: "youtube",
        views: 12451409
      },
      {
        title: "The Killers - The Man (Official Music Video)",
        type: "video",
        source: "youtube",
        videoId: "w3xcybdis1k",
        views: 25560867
      },
      {
        title: "A funny dog barking",
        type: "video",
        source: "youtube",
        videoId: "MveqXxB12YA",
        views: 4287171
      }
    ],
    expectedKeys: ["title", "views", "videoId"],
    urlExtensions: {
      facebook: "https://www.facebook.com/facebook/videos/",
      youtube: "https://www.youtube.com/embed/",
      itemNotFound: "../../img/video404.gif"
    }
  };
  render() {
    return (
      <ul className="video-list">
        {this.mapArray().map((value, i) => {
          let a = this.buildDom(value, i);
          console.log(a);
          return this.buildDom(value, i);
        })}
      </ul>
    );
  }

  mapArray() {
    const { urlExtensions } = this.state;
    const self = this;
    return this.state.items.map(function(value, index) {
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
