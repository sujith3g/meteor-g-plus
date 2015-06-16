Meteor.cordova_g_plus = function(request, callback) {
    window.plugins.googleplus.login({},
        function(response) {
            request.email = response.email;
            request.id = response.userId;
            request.oAuthToken = response.oauthToken;

            Accounts.callLoginMethod({ // call cordova_g_plus SignIn handler @ server
                methodArguments: [request],
                userCallback: callback
            });
        },
        function(error) {
            alert(error);
        }
    );
};
