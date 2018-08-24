module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
    "eslint:recommended",
    "plugin:vue/recommended"
    ],  
    "parserOptions": {
        "ecmaVersion": 2015
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
