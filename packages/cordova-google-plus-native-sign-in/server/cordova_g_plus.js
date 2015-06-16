Accounts.registerLoginHandler(function(req) { // cordova_g_plus SignIn handler
    if (!req.cordova_g_plus)
        return undefined;

    var user = Meteor.users.findOne({
            "services.google.email": req.email,
            "services.google.id": req.id
        }),
        userId = null;

    if (!user) {
        var res = Meteor.http.get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
                "User-Agent": "Meteor/1.0"
            },

            params: {
                access_token: req.oAuthToken
            }
        });

        if (res.error) throw res.error;
        else {
            if (req.email == res.data.email && req.id == res.data.sub) {
                var googleResponse = _.pick(res.data, "email", "email_verified", "family_name", "gender", "given_name", "locale", "name", "picture", "profile", "sub");

                googleResponse.id = googleResponse.sub;
                delete googleResponse.sub;

                userId = Meteor.users.insert({
                    createdAt: new Date(),
                    profile: googleResponse,
                    services: {
                        google: _.extend(googleResponse, {
                            accessToken: req.oauthToken
                        })
                    }
                });
            } else throw new Meteor.Error(422, "AccessToken MISMATCH");
        }
    } else userId = user._id;

    var stampedToken = Accounts._generateStampedLoginToken();
    var stampedTokenHash = Accounts._hashStampedToken(stampedToken);

    Meteor.users.update({
        _id: userId
    }, {
        $push: {
            "services.resume.loginTokens": stampedTokenHash
        }
    });

    return {
        token: stampedToken.token,
        userId: userId
    };
});
