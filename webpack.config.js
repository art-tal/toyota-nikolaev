module.exports = {
    module: {
        rules: [
            {
                test: /\.(mp4|avi|mkv)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
};