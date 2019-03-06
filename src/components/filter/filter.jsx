import React, { Component } from "react";
import axios from "axios";

const videoService = require("../../services/videoService.js");

class Filter extends Component {
  state = {
    checkedCategory: -1
  };
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          margin: "0 auto",
          width: "80%",
          marginTop: "10px"
        }}
      >
        <span>FILTER BY: </span>
        {this.props.categories.map((category, i) => {
          return (
            <label key={i}>
              <input
                type="radio"
                value={category}
                name="filter-group"
                checked={this.isChecked(i)}
                //onChange={event => this.getFilteredData(i, event)}
                onClick={event => this.getFilteredData(i, event)}
              />
              {category.toUpperCase()}
            </label>
          );
        })}
      </div>
    );
  }

  isChecked(categoryIndex) {
    return categoryIndex === this.state.checkedCategory;
  }

  updateCheckedCategoryState(categoryIndex) {
    if (this.isChecked(categoryIndex)) {
      categoryIndex = -1;
    }

    this.setState({
      checkedCategory: categoryIndex
    });

    return categoryIndex;
  }

  filterBy(categoryIndex) {
    if (categoryIndex === -1) return categoryIndex;

    return this.props.categories[categoryIndex];
  }

  getFilteredData(categoryIndex, event) {
    const self = this;

    categoryIndex = this.updateCheckedCategoryState(categoryIndex);

    videoService.filter(this.filterBy(categoryIndex)).then(res => {
      self.props.updateList(res.data);
    });
  }

  buildFilterQuery(categoryIndex) {}
}

export default Filter;
