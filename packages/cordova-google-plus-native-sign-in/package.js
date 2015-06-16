Package.describe({
    name: "hedcet:cordova-google-plus-native-sign-in",
    summary: "cordova google-plus native signIn",
    documentation: "README.md",
    version: "0.0.2",
    git: "https://github.com/sujith3g/meteor-g-plus.git"
});

Cordova.depends({
    "nl.x-services.plugins.googleplus": "1.1.2"
});

Package.onUse(function(api) {
    api.versionsFrom("METEOR@1.0");

    api.use([
        "accounts-base"
    ], ["client", "server"]);
    api.use(["http"], ["server"]);

    api.imply(["accounts-base"], ["client", "server"]);

    api.add_files([
        "server/cordova_g_plus.js"
    ], ["server"]);

    api.add_files([
        "cordova/cordova_g_plus.js"
    ], ["web.cordova"]);
});
