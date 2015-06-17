# Cordova Google Plus native Login implemented in MeteorJS

#### Description
This is an example Meteor-Android App with native Google Plus Login using [`hedcet:cordova-google-plus-native-sign-in`](https://atmospherejs.com/hedcet/cordova-google-plus-native-sign-in) meteor package.

#### Screenshots
<img alt="Screenshots" title="Meteor-Cordova Google Plus SignIn" src="https://github.com/sujith3g/meteor-g-plus/blob/master/public/screnshots/gplus-login.png" width="235" height="400">

#### Demo
*   Android App [here](https://github.com/sujith3g/meteor-g-plus/tree/master/.APK)
*   Check it's web version [here](http://googleplus.meteor.com)
*   Example with custom profile fields [here](https://github.com/HedCET/cordova-native-google-signIn).


#### Usage
1.  Add android platform to your app `meteor add-platform android`. You can follow [this](https://github.com/meteor/meteor/wiki/Meteor-Cordova-Phonegap-integration) Documentation.
2.  Install `hedcet:cordova-google-plus-native-sign-in` package to your app by typing `meteor add hedcet:cordova-google-plus-native-sign-in`.
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
4.  Now use the App ID created in step-3 to Setup Google Plus API for android by following step-1 of [this guide](https://developers.google.com/+/mobile/android/samples/quickstart-android).
5.  Now in your client side code  you can use `Meteor.cordova_g_plus({cordova_g_plus: true});` as shown

```javascript
if (Meteor.isCordova) { // signIn through cordova
    Meteor.cordova_g_plus({
        cordova_g_plus: true,
        profile: ["email", "email_verified", "gender", "locale", "name", "picture"] // customized Meteor.user() pfofile
    });
} else { // signIn through browser
    if (Accounts.loginServicesConfigured()) {
        Meteor.loginWithGoogle({
            requestOfflineToken: true,
            requestPermissions: ["email", "profile"]
        }, function(error) {
            if (error) alert(error);
            // else location.reload();
        });
    }
}
```
