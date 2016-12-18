var google = {
    // Use OAuth Credentials of web application/client here, for oauth from web browser.
    // You have to create oAuth credentials for webclient from Google dev console.
    // see https://github.com/sujith3g/meteor-g-plus/blob/master/public/screnshots/create.png
    clientId: "767912667782-bonpfuqdmu5jmn1bp1a8bgg6mdcorgc5.apps.googleusercontent.com",
    clientSecret: "pOnK8xBXB3zRDNGn3hyjrkxH"
};

Meteor.startup(function() {

    Accounts.loginServiceConfiguration.remove({
        service: "google"
    });

    Accounts.loginServiceConfiguration.insert({
        service: "google",
        clientId: google.clientId,
        secret: google.clientSecret
    });

});

Accounts.config({
    // forbidClientAccountCreation: true,
    loginExpirationInDays: 0,
    // restrictCreationByEmailDomain: function(emailId) {
    //     var domainAllowed = ["hedcet.com"];
    //     var domain = emailId.slice(emailId.lastIndexOf("@") + 1);
    //     return _.contains(domainAllowed, domain);
    // },
    // sendVerificationEmail: true
});

Accounts.onCreateUser(function(opts, user) {
    var res = Meteor.http.get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
            "User-Agent": "Meteor/1.0"
        },

        params: {
            access_token: user.services.google.accessToken
        }
    });

    if (res.error)
        throw res.error;

    user.profile = _.pick(res.data, "email", "email_verified", "family_name", "gender", "given_name", "locale", "picture", "sub");

    return user;
});
