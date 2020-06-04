# REALTIME CODE EDITOR

This web project provides the clients the functionality to **WRITE CODE COLLABORATIVELY**. Many concurrent clients can write code simultaneously together.

## Tools/frameworks used

- NodeJS
- SocketIO
- [Ace Editor](https://github.com/ajaxorg/ace)

## Installation

First clone the repo to your local machine. Then open the terminal and navigate to the folder where you cloned the repo. Therein type `cd REALTIME-CODE-EDITOR` . Then make sure that you have NodeJS and NPM installed, if not then install them first. After that type `npm install`. It will install all the required dependencies. Then clone the [ace-build](https://github.com/ajaxorg/ace-builds/) repo by typing in the terminal `git clone https://github.com/ajaxorg/ace-builds.git`. Then type `npm start` on the terminal. It will start the server. Then open the **index.html** in your browser. You can test the concurrency by opening several windows and try writing something in one window, it'll be reflected in all of the windows.

Currently it supports only Javascript, will try to add more language features to it.
