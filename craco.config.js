module.exports = {
    webpack: {
        configure: {
            target: 'electron-renderer'
        },
        "compilerOptions": {
            "module": "commonjs",
            "target": "es6"
        },
        "exclude": ["node_modules"]
    }
};
