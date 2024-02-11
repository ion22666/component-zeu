const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/index.ts", // entry point of your application
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js", // output bundle file name
	},
	module: {
		rules: [
			{
				test: /\.(js|ts)x?$/, // match TypeScript and JavaScript files
				exclude: /node_modules/,
				use: {
					loader: "swc-loader", // use swc-loader for handling TypeScript/JavaScript files
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	devServer: {
		static: [
			{
				directory: path.join(__dirname, "test"),
				publicPath: "/",
			},
			{
				directory: path.join(__dirname, "dist"),
				publicPath: "/dist",
			},
		],
		compress: true,
		port: 9000,
	},
	cache: false,
};
