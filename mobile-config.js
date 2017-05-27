App.accessRule('*://*.googleapis.com/*');
App.accessRule('*://*.googleusercontent.com/*');

App.info({
    author: 'x',
    description: 'Cordova Google Plus SignIn',
    email: 'x',
    id: 'com.hedcet.meteor',
    name: 'example',
    website: 'https://github.com/sujith3g/meteor-g-plus',
    version: '1.0.0',
});

App.setPreference('android-installLocation', 'preferExternal');
App.setPreference('android-minSdkVersion', '21');
App.setPreference('AndroidLaunchMode', 'singleInstance');
App.setPreference('SplashShowOnlyFirstTime', false);
App.setPreference('StatusBarBackgroundColor', '#00BCD4');
