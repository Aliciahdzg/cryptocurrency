// Generated using webpack-cli https://github.com/webpack/webpack-cli

//const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;

const deps = require("./package.json").dependencies;
const isProduction = process.env.NODE_ENV == "production";



const config = {
  entry: "./src/index.js",
  output: {
    //path: path.resolve(__dirname, "public"),
    publicPath: "http://localhost:3001/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  devServer: {
    open: true,
    port: 3001,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
              [
                  '@babel/preset-react',
                  {
                      runtime: 'automatic'
                  }
              ]
          ]
        }  
      },
      {
        test: /\.css$/i,
        use: ["style-loader","css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Login",
      filename: "remoteEntry.js",

      remotes: {},

      exposes: {
        "./Login": "./src/App.jsx",
      },

      shared: {
        ...deps,
        react: {
          eager: true,
          singleton: true,
          requiredVersion: deps.react,
        },
        
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};
