
module.exports = {
    module: {
        rules: [
            { test: /\.txt$/, use: "raw-loader" },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};
