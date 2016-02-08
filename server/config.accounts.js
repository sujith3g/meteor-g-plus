var google = {
    // Use OAuth Credentials of web application/client here, for oauth from web browser.
    clientId: "81242494817-38ohse21enq5ibpe65155qp82lr6h7e7.apps.googleusercontent.com",
    clientSecret: "SXV_5gjOLtwhoCnYE_2oh9Et"
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

    user.profile = _.pick(res.data, "email", "email_verified", "gender", "locale", "name", "picture", "sub");

    return user;
});
