# Cordova Google Plus native Login implemented in MeteorJS

[![Donate](https://img.shields.io/gratipay/sujith3g.svg)](https://gratipay.com/cordova-google-plus-native-sign-in/) [![ghit.me](https://ghit.me/badge.svg?repo=sujith3g/meteor-g-plus)](https://ghit.me/repo/sujith3g/meteor-g-plus)

#### Description

This is an example Meteor Android App with native Google Plus Login using [`hedcet:cordova-google-plus-native-sign-in`](https://atmospherejs.com/hedcet/cordova-google-plus-native-sign-in) meteor package.

#### Screenshots

<img alt="Screenshots" title="Meteor-Cordova Google Plus SignIn" src="https://github.com/sujith3g/meteor-g-plus/blob/master/public/screnshots/gplus-login.png" width="256" height="448">

#### Demo

* Android [example](https://github.com/sujith3g/meteor-g-plus/tree/master/.APK).

#### Usage

1. Add Android platform to your App `meteor add-platform Android`. You can follow [this](https://github.com/meteor/meteor/wiki/Meteor-Cordova-integration) Documentation.

2. Install `hedcet:cordova-google-plus-native-sign-in` package to your App by typing `meteor add hedcet:cordova-google-plus-native-sign-in`.

3. Add `mobile-config.js` file to your App & specify an App ID like `com.example.meteor_g_plus`
 
  ```javascript
  App.info({
    author: 'x',
    description: 'Cordova Google Plus SignIn',
    email: 'x',
    id: 'com.example.meteor_g_plus',
    name: 'example',
    website: 'https://github.com/x/x',
    version: '1.0.0',
});
  ``` 
4. Now use the App ID(`com.example.meteor_g_plus`) created in step-3 as "Android package name" to setup Google Plus API for Android by following [this guide](https://developers.google.com/mobile/add?platform=Android). Once Google Sign-In is enabled Google will automatically create necessary credentials in Developer Console. There is no need to add the generated google-services.json file into your meteor project.

 Make sure you execute the `keytool` steps as well or authentication will fail.

5. Create oAuth credential for web-Application in the same project(in google-dev-console created in step 4) for `accounts-google` package. Use the `client ID`, `client Secret` from web-client credentials for `accounts-google` like [this](https://github.com/sujith3g/meteor-g-plus/blob/master/server/config.accounts.js#L14).

<img alt="Screenshots" title="google-dev-console" src="https://github.com/sujith3g/meteor-g-plus/blob/master/public/screnshots/oauth_client.png" width="756" height="448">

6. Now in your client side code you can use `Meteor.cordova_g_plus({cordova_g_plus: true});` as shown

##### LogIn

```javascript
if (Meteor.isCordova) { // signIn through cordova
    Meteor.cordova_g_plus({
        cordova_g_plus: true,
        profile: ["email", "email_verified", "gender", "locale", "name", "picture"],
        webClientId: 'your-web-client-id'
      }, (error) => {
        if (error) {
            // error handling code
        }
    });
}
```

##### Logout
 
 ```javascript
 window.plugins.googleplus.logout((msg) => {
    Meteor.logout((error) => {
        if (error) {
            // error handling code
        }
    });

    // do something useful

});
 ```

##### Disconnect

```javascript
window.plugins.googleplus.disconnect((msg) => {

    // do something useful

});
```
