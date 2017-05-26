Template.googleSignIn.rendered = () => {
    Tracker.autorun(() => {
        if (Meteor.user()) {
            alert(JSON.stringify(Meteor.user()));
        }
    });
};

Template.googleSignIn.helpers({
    isCordova() {
        return Meteor.isCordova;
    }
})

Template.googleSignIn.events({
    'click #g-plus'() {
        alert('google SignIn button clicked');

        if (Meteor.isCordova) { // signIn through cordova
            Meteor.cordova_g_plus({

                cordova_g_plus: true,
                webClientId: '767912667782-bonpfuqdmu5jmn1bp1a8bgg6mdcorgc5.apps.googleusercontent.com',

                profile: ['email', 'email_verified', 'family_name', 'gender', 'given_name', 'locale', 'name', 'picture', 'profile', 'sub'],

            }, (error) => {
                if (error) alert(error);
            });
        } else { // signIn through browser
            if (Accounts.loginServicesConfigured()) {
                Meteor.loginWithGoogle({

                    requestOfflineToken: true,
                    requestPermissions: ['email', 'profile'],

                }, (error) => {
                    if (error) alert(error);
                });
            }
        }
    },

    'click #sign-out'() {
        alert('Meteor SignOut button clicked');

        Meteor.logout((error) => {
            if (error) alert(error);
        });
    },

    'click #disconnect'() {
        alert('google disconnect button clicked');

        window.plugins.googleplus.disconnect((error) => {
            if (error) alert(error);
        });
    }
});
