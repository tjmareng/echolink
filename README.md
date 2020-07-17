<p align="center">
  <a href="https://echolink-chat.herokuapp.com/">
    <img
      alt="Echolink"
      src="./echolink/public/images/logo.png"
      width="400"
    />
  </a>
</p>
<p align="center">
<a style="padding-left: 10px; padding-right: 10px;" href='https://reactjs.org/'><img src='./echolink/public/images/react.svg' height='60' alt='React Logo'/></a><a style="padding-left: 10px; padding-right: 10px;" href='http://redux.js.org'><img src='./echolink/public/images/redux.svg' height='60' alt='Redux Logo'/></a><a style="padding-left: 10px; padding-right: 10px;" href='https://nodejs.org/en/'><img src='./echolink/public/images/nodejs.svg' height='60' alt='Nodejs Logo'/></a><a style="padding-left: 10px; padding-right: 10px;" href='https://socket.io/'><img src='./echolink/public/images/socketio.svg' height='60' alt='Socketio Logo'/></a>
</p>

# EchoLink

*In the process of becoming a React app*

[EchoLink](https://echolink-chat.herokuapp.com/) is a chat service developed using React/Redux, Nodejs, and Socket.io. This application is built and ran by Heroku. The purpose of this application is to allow users to choose a temporary username and chat room where they can converse or play games provided by the chat bot, Cassy (coming soon).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Demo

[Click Here](https://echolink-chat.herokuapp.com/)

# Overview

[Organization](https://github.com/tjmareng/echolink#organization)

[Screenshots](https://github.com/tjmareng/echolink#screenshots)

[Development](https://github.com/tjmareng/echolink#development)

# Organization

### echolink
`echolink/` will be the root directory once I finish converting the application into a React/Redux application.

### json
`json/config.json` is where the config settings are being held.

### public
`public/css/` is where you will find the styling. `public/images/` is where you can find all images. `public/index.html` and `public/chat.html` hold the html pages for the application.

### src
`src/` is where you will find the server and utilities used to create the chat application. `src/commands/` will hold all of the bot commands once they are implemented.

# Screenshots

Coming Soon

# Development

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Getting Started

Clone the project, change into the directory, and install the dependencies:

```
git clone https://github.com/tjmareng/react-express-startup.git
cd echolink
npm install or npm i
```

### Prerequisites

Installing Node.js and NPM:

```
1. Visit https://nodejs.org/en/ or https://nodejs.org/en/download/
2. Click on the 'Recommended For Most Users' Download or click the 'LTS' Tab within the download page
3. Run the file
4. After installation, close the terminal
5. Open the terminal and type 'node --version'
6. v10.15.3 or a later version should appear
```
Reference [this](https://wsvincent.com/install-node-js-npm-windows/) page if you run into any issues.

### Installing

Step by step example on how to get your development environment running:

Installing node_modules:

```
1. npm install - installs all dependencies
2. Check for the node_modules folder
```

### Deployment

## Additional Information

## Troubleshooting

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

