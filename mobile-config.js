App.accessRule('*://*.googleapis.com/*');
App.accessRule('*://*.googleusercontent.com/*');

App.info({
    author: 'x',
    description: 'Cordova Google Plus SignIn',
    email: 'x',
    id: 'meteor.g.plus',
    name: 'meteor.g.plus',
    website: 'https://github.com/x/x',
    version: '1.0.0',
});

App.setPreference('android-installLocation', 'preferExternal');
App.setPreference('android-minSdkVersion', '21');
App.setPreference('AndroidLaunchMode', 'singleInstance');
App.setPreference('SplashShowOnlyFirstTime', false);
App.setPreference('StatusBarBackgroundColor', '#00BCD4');
