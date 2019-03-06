const axios = require("axios");

const api = "http://localhost:8080/api";

module.exports = {
  getVideos: function() {
    return axios.get(api + "/getVideos");
  },

  filter: function(source) {
    return axios.get(api + "/filter?source=" + source);
  }
};
