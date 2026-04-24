const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { ModuleFederationPlugin } = require("@module-federation/enhanced/webpack");
const mfConfig = require("./mf.config.cjs");

/** @param {unknown} _env @param {{ mode?: string }} argv */
module.exports = (_env, argv) => {
  const isDevelopment = argv.mode !== "production";

  return {
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
      path: path.join(__dirname, "dist"),
      filename: isDevelopment ? "[name].js" : "[name].[contenthash].js",
      clean: true,
      publicPath: "auto",
      uniqueName: "unique_counter",
    },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
    },
    devtool: isDevelopment ? "eval-cheap-module-source-map" : "source-map",
    devServer: {
      port: 5174,
      hot: true,
      liveReload: true,
      historyApiFallback: true,
      client: {
            overlay: true,
            webSocketURL: {
              hostname: "localhost",
              pathname: "/ws",
              port: 5174,
              protocol: "ws",
            },
          },
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: require.resolve("swc-loader"),
              options: {
                jsc: {
                  parser: { syntax: "typescript", tsx: true },
                  transform: {
                    react: {
                      runtime: "automatic",
                      development: isDevelopment,
                      refresh: isDevelopment,
                    },
                  },
                  target: "es2020",
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.join(__dirname, "index.html") }),
      isDevelopment && new ReactRefreshWebpackPlugin(),
      new ModuleFederationPlugin(mfConfig),
    ].filter(Boolean),
  };
};
