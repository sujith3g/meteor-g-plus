const google = {

    // Use oAuth credentials of web application/client here, for oAuth from web browser.
    // see https://github.com/sujith3g/meteor-g-plus/blob/master/public/screnshots/create.png

    clientId: "767912667782-bonpfuqdmu5jmn1bp1a8bgg6mdcorgc5.apps.googleusercontent.com",
    clientSecret: "pOnK8xBXB3zRDNGn3hyjrkxH"

};

Meteor.startup(() => {

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
    // restrictCreationByEmailDomain(emailId) {
    //     return true;
    // },
    // sendVerificationEmail: true
});
