module.exports = {
    "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "rules": {
    "no-debugger": 2,
    "no-console": 2,
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
      2,
      "always"
    ]
  }
};