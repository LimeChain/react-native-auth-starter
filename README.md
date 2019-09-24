# 🚀🚀🚀 React Native + TypeScript + React Navigation + MobX + Axios [September 2019] 🚀🚀🚀

Starter project for mobile app application with Home, Login and Register page. [ React Native, TypeScript, MobX, Axios ]
Project created with https://github.com/react-native-community/react-native-template-typescript

## Features

- [React Navigation](https://reactnavigation.org/)

## Getting Started

1. Clone this repo, `Github URL`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder, `rm -rf .git`
4. Open `package.json` and change the `name` property with your project name
5. Open `index.js` and replace `'ReactNativeTsStarter'` by your project name
6. Open `app.json` and replace `'ReactNativeTsStarter'` by your project name

7. Run `npm install` to install dependencies

8. Run `react-native eject` to upgrade and add iOS & Android Folders.

9. Run `react-native link react-native-gesture-handler`

10. Latest versions of react-naviagtion uses gesture handler which is native module. For android you have to do some additional steps to configure them. Follow [these instructions](https://reactnavigation.org/docs/en/getting-started.html)

## FYI: Navigation should work fine even without these but when u need gestures or drawer navigation you need this setup

11. Start the packager with `npm start`
12. Connect a mobile device to your development machine
13. Run the test application:

- On Android:
  - Run `react-native run-android`
- On iOS:
  - Run `react-native run-ios`
  - OR
  - Open `ios/YourReactProject.xcodeproj` in Xcode
  - Hit `Run` after selecting the desired device
