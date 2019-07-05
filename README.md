SUPER CHAT BROS
=====================

A chat application for Super Smash Bros enthusiasts!

### Usage

Clone this repo, and the Websocket server [found here](https://github.com/lukehorak/SuperChatServer).

This repo runs on port 3000 by default, and the Websocket server on 3001.

These ports can be modified in the source at the following locations:

React App: ```/src/App.jsx``` line 50
Websocket Server: ```server.js``` line 8

### Dependencies

React:
```
  "devDependencies": {
    "babel-core": "6.23.1",
    "babel-eslint": "^10.0.2",
    "babel-loader": "6.3.1",
    "babel-preset-es2015": "6.22.0",
    "babel-preset-react": "6.23.0",
    "babel-preset-stage-0": "6.22.0",
    "css-loader": "0.26.1",
    "node-sass": "4.5.0",
    "sass-loader": "6.0.0",
    "sockjs-client": "^1.1.2",
    "style-loader": "0.13.1",
    "webpack": "2.2.1",
    "webpack-dev-server": "2.3.0"
  },
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^1.2.19",
    "@fortawesome/free-solid-svg-icons": "^5.9.0",
    "@fortawesome/react-fontawesome": "^0.1.4",
    "react": "15.4.2",
    "react-dom": "15.4.2"
    }
```

Websocket Server:
```
"dependencies": {
    "express": "4.17.1",
    "uuid": "^3.3.2",
    "ws": "7.0.1"
  }
```
