"use strict";

module.exports = {

  name: "Brackets",
  fields: require("./fields"),
  split: require("../default-splitter"),
  detect: require("./detector"),
  parse: require("./parser"),
  generate: require("./generator"),

};
