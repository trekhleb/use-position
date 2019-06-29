module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "google",
    "plugin:react/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "settings": {
    "react": {
      "version": "detect"
    },
  },
  "rules": {
  }
};
