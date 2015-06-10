if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.hello.helpers({
        counter: function() {
            return Session.get('counter');
        }
    });

    Template.hello.rendered = function() {

        Meteor.autorun(function() {
            if (Meteor.user()) {
                alert(JSON.stringify(Meteor.user()));
            }
        });

    };

    Template.hello.events({
        'click #g-plus': function() {
            console.log("clicked");
            if (Meteor.isCordova) {
                // window.plugins.googleplus.login(
                //     {
                //       // 'iOSApiKey': '1234567890-abcdefghijklm74bfw.apps.googleusercontent.com'
                //       // there is no API key for Android; you app is wired to the Google+ API by listing your package name in the google dev console and signing your apk (which you have done in chapter 4)
                //     },
                //     function (obj) {
                //       console.log(obj);
                //       alert(JSON.stringify(obj)); // do something useful instead of alerting
                //     },
                //     function (msg) {
                //       alert('error: ' + msg);
                //     }
                // );
                Meteor.cordova_g_plus({
                    cordova_g_plus: true
                });

            }
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
