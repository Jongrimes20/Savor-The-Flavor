const path = require("path");

module.exports = {
  entry: "./app.js", // Specify the entry point of your application
  output: {
    filename: "bundle.js", // Specify the output bundle file name
    path: path.resolve(__dirname, "dist"), // Specify the output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Use Babel for all JavaScript files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
