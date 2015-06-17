Template.googleSignIn.rendered = function() {
    Meteor.autorun(function() {
        if (Meteor.user()) {
            alert(JSON.stringify(Meteor.user()));
        }
    });
};

Template.googleSignIn.events({
    'click #g-plus': function() {
        alert("googleSignIn button clicked");

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
    },

    "click #sign-out": function() {
        Meteor.logout();
    }
});
