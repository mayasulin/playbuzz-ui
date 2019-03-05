import React, { Component } from "react";
import "./titleStyle.css";

class Title extends Component {
  state = {};
  render() {
    return (
      <div className="header header-background header-box-shadow">
        <span>{this.toUppercase(this.props.text)}</span>
      </div>
    );
  }

  toUppercase(text) {
    return text.toUpperCase();
  }
}

export default Title;
