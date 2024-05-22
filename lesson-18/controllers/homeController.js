// homeController.js
"use strict";

module.exports = {
  showHome: (req, res) => {
    res.render("index");
  },

  showTransportation: (req, res) => {
    res.render("transportation");
  }
};
