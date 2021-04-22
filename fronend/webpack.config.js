require('dotenv').config();

const webpack = require('webpack');

module.exports = {
  plugins: [new webpack.EnvironmentPlugin(['API_URL', 'INTERNAL_HOST', 'EXTERNAL_HOST'])]
};
