const path = require("path");

module.exports = {
	mode: "production",
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
};
