# Cordova Google Plus native Login implemented in MeteorJS

#### Description
This is an example Meteor-Android App with native Google Plus Login using [`hedcet:cordova-google-plus-native-sign-in`](https://atmospherejs.com/hedcet/cordova-google-plus-native-sign-in) meteor package.

#### Screenshots
<img alt="Screenshots" title="Meteor-Cordova Google Plus SignIn" src="https://github.com/sujith3g/meteor-g-plus/blob/master/public/screnshots/gplus-login.png" width="235" height="400">

#### Demo
*   Android App [here](https://github.com/sujith3g/meteor-g-plus/tree/master/.APK).
*   Check it's web version [here](http://googleplus.meteor.com).
*   Another [example](https://play.google.com/store/apps/details?id=com.vcompile.torrentz).

#### Usage
1.  Add android platform to your app `meteor add-platform android`. You can follow [this](https://github.com/meteor/meteor/wiki/Meteor-Cordova-integration) Documentation.
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
4.  Now use the App ID(`com.example.cordova`) created in step-3 as "Android package name" to Setup Google Plus API for android by following only step-2(Get a configuration file) of [this guide](https://developers.google.com/+/mobile/android/samples/quickstart-android). Once Google Sign-In is enabled Google will automatically create necessary credentials in Developer Console. There is no need to add the generated google-services.json file into your meteor project.

 Make sure you execute the `keytool` steps as well or authentication will fail.

5. You have to create oauth credential for web-Application in the same project(in google-dev-console created in step 4) for `accounts-google` package. Use the `client ID`, `client Secret` from web-client credentials for `accounts-google` like [this](https://github.com/sujith3g/meteor-g-plus/blob/master/server/config.accounts.js#L14).

<img alt="Screenshots" title="google-dev-console" src="https://github.com/sujith3g/meteor-g-plus/blob/master/public/screnshots/credential.png" width="700" height="335">

6.  Now in your client side code  you can use `Meteor.cordova_g_plus({cordova_g_plus: true});` as shown

#####LogIn

```javascript
if (Meteor.isCordova) { // signIn through cordova
    Meteor.cordova_g_plus({
        cordova_g_plus: true,
        profile: ["email", "email_verified", "gender", "locale", "name", "picture"]
      }, function(error) {
            if (error) {
                //error handling code
                alert(error);
            }
    });
}
```
#####Logout
 
 ```javascript
 window.plugins.googleplus.logout(
     function(msg) {
         Meteor.logout();
         alert(msg); // do something useful instead of alerting
     }
 );
 
 ```
#####Disconnect

```javascript
window.plugins.googleplus.disconnect(
   function(msg) {
       alert(msg); // do something useful instead of alerting
   }
 );
```
