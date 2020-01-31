"use strict";

require("source-map-support").install();
require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "es2017",
  },
});

exports.createPages = require("./src/gatsby/create-pages");
exports.onCreateNode = require("./src/gatsby/on-create-node");
