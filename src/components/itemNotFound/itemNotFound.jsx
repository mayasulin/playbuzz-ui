import React, { Component } from "react";
import videoNotFound from "../../img/video404.gif";

class ItemNotFound extends Component {
  state = {};
  render() {
    return <img src={videoNotFound} width="400px" height="220px" />;
  }
}

export default ItemNotFound;
