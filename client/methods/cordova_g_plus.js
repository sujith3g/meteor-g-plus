Meteor.cordovaSignIn = function(request, callback) {
    window.plugins.googleplus.login({},
        function(response) {
            request.email = response.email;
            request.id = response.userId;
            request.oAuthToken = response.oauthToken;

            Accounts.callLoginMethod({
                methodArguments: [request],
                userCallback: callback
            });
        },
        function(error) {
            alert(error);
        }
    );
};
