const { dependencies } = require("./package.json");

module.exports = {
  name: "module-name",
  exposes: {
    "./App": "./src/App",
  },
  filename: "moduleEntry.js",
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
