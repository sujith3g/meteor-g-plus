# Cordova Google Plus native Login implemented in MeteorJS
#### Description

This is an example Meteor-Android App with native Google Plus Login using [`cordova-google-plus-native-sign-in`](https://atmospherejs.com/hedcet/cordova-google-plus-native-sign-in) meteor package.
#### Screenshots
Coming soon.
#### Demo
*   Android app [here](https://github.com/sujith3g/meteor-g-plus/tree/master/.APK)  
*   Check the Web version [here](http://googleplus.meteor.com/)

#### Usage
1.  Install `cordova-google-plus-native-sign-in` package to your app by typing `meteor add cordova-google-plus-native-sign-in`.
2.  Add android platform to your app `meteor add-platform android`. You can follow [this](https://github.com/meteor/meteor/wiki/Meteor-Cordova-Phonegap-integration) Documentation.
3.  Add `mobile-config.js` file to your app, and specify an App ID like `com.example.cordova`
  ```javascript
  App.info({
    id: 'com.example.cordova',
    name: 'HedCET',
    description: 'Cordova Google Plus SignIn Sample',
    version: "0.0.1",
    author: 'HedCET'
});
  ```
4.  Now use the App ID created in step-3 to [Setup Google Plus API](https://developers.google.com/+/mobile/android/samples/quickstart-android).
