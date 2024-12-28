const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { FederatedTypesPlugin } = require("@module-federation/typescript");
const path = require("path");
const Dotenv = require("dotenv-webpack");
const deps = require("./package.json").dependencies;

module.exports = (_, argv) => {
  const isProduction = argv.mode === "production";
  const appName = argv.env["appName"];
  const federationConfig = {
    name: "bookert",
    filename: "remoteEntry.js",
    remotes: {},
    exposes: {},
    shared: {
      ...deps,
      react: {
        singleton: true,
        requiredVersion: deps.react,
      },
      "react-dom": {
        singleton: true,
        requiredVersion: deps["react-dom"],
      },
    },
  };

  return {
    devtool:false,
    output: {
      filename: "[name].[contenthash].js",
      clean: true,
      publicPath: isProduction ? appName : "http://localhost:8080/",
    },

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json", ".svg"],
      fallback: {
        stream: require.resolve("stream-browserify"),
        buffer: require.resolve("buffer"),
      },
    },

    devServer: {
      port: 8080,
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, "dist"),
      },
      client: {
        logging: "info",
      },
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(png|jpe?g|gif|ico|svg)$/i,
          use: [{ loader: "file-loader" }],
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin(federationConfig),
      new FederatedTypesPlugin({ federationConfig }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        hash: true,
        minify: true,
      }),

      new Dotenv(),
    ],
    optimization: {
      minimize: isProduction,
      sideEffects: true,
      usedExports: true,
      //minimizer: [new TerserPlugin({ extractComments: true })],
    },
  };
};
