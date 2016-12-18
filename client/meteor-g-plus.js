Template.googleSignIn.rendered = function() {
    Meteor.autorun(function() {
        if (Meteor.user()) {
            alert(JSON.stringify(Meteor.user()));
        }
    });
};
Template.googleSignIn.helpers({
  isCordova:function(){
    return Meteor.isCordova;
  }
})
Template.googleSignIn.events({
    'click #g-plus': function() {
        alert("googleSignIn button clicked");

        if (Meteor.isCordova) { // signIn through cordova
            Meteor.cordova_g_plus({
                cordova_g_plus: true,
                profile: ["email", "email_verified", "family_name", "gender", "given_name", "locale", "picture"], // customized Meteor.user() pfofile ["email", "email_verified", "family_name", "gender", "given_name", "locale", "name", "picture", "profile", "sub"]
                webClientId: '767912667782-bonpfuqdmu5jmn1bp1a8bgg6mdcorgc5.apps.googleusercontent.com'
            }, function(error) {
                if (error) alert(error);
                // else location.reload();
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
      if(Meteor.isCordova){
        window.plugins.googleplus.logout(
            function(msg) {
                Meteor.logout();

                alert(msg); // alert msg
            }
        );
      }else{
        Meteor.logout();
      }
    },

    "click #disconnect": function() {

        window.plugins.googleplus.disconnect(
            function(msg) {
                alert(msg); // alert msg
            }
        );
    }
});
