const videoService = require("../services/videoService.js");

module.exports = {
  getVideos: function() {
    videoService.getVideos().then(res => {
      return res.data;
    });
  }
};
