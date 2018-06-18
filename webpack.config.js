"use strict";

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: /src/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  }
};
