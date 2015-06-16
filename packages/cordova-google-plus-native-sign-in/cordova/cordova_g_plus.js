Meteor.cordova_g_plus = function(request, callback) {
    window.plugins.googleplus.login({},
        function(response) {
            alert(JSON.stringify(response));

            request.email = response.email;
            request.id = response.userId;
            request.oAuthToken = response.oauthToken;

            alert(JSON.stringify(request));

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
