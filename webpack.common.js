const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const RobotstxtPlugin = require("robotstxt-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "prod"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "static/images",
              esModule: false,
              name: "[name].[ext]",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
          outputPath: "static/fonts",
          name: "[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Dalius Digital, personal portfolio",
      filename: "index.html",
      template: "./src/index.html",
      minify: true,
      meta: {
        author: "Dalius Slavickas",
        keywords:
          "Portfolio CV frontend backend programming design node react personal mongodb",
        description:
          "Design, Front and Back end development. Personal portfolio Website of Dalius Slavickas.",
        charset: "UTF-8",
        viewport: "width=device-width, initial-scale=1.0",
        "og:type": "website",
        "og:url": "https://dalius.digital/",
        "og:title": "Dalius Digital, personal portfolio",
        "og:description":
          "Design, Front and Back end development. Personal portfolio Website of Dalius Slavickas.",
        "og:image": "https://dalius.digital/static/images/dog.jpg",
        "twitter:card": "summary_large_image",
        "twitter:url": "https://dalius.digital/",
        "twitter:title": "Dalius Digital, personal portfolio",
        "twitter:description":
          "Design, Front and Back end development. Personal portfolio Website of Dalius Slavickas.",
        "twitter:image": "https://dalius.digital/static/images/dog.jpg",
      },
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/static/images/dd_fav.png",
      outputPath: "static/favicon",
      prefix: "static/favicon/",
    }),
    new RobotstxtPlugin({
      policy: [
        {
          userAgent: "*",
          disallow: "",
        },
      ],
      host: "http://dalius.digital",
    }),
  ],
};
