Template.main.events({
    'submit form': function(event) {
        var userInfo = {};
        event.preventDefault();

        userInfo.username = event.target['username'].value;
        userInfo.password = event.target['password'].value;

        if (userInfo.username === '') {
            return notify('Username is required.', 'bad');
        } else if (userInfo.password === '') {
            return notify('Password is required.', 'bad');
        }

        Meteor.call('CheckStatus', userInfo.username, function(error, result) {
            if (error) {
                return notify(error.reason, 'bad');
            }
            if (result) {
                return notify('Account Deactivated!', 'bad');
            } else {
                Meteor.loginWithPassword(userInfo.username, userInfo.password, function(error) {
                    if (error) {
                        return notify(error.reason, 'bad');
                    }
                    // add to log if logging in is success
                    var log = 'Logged in to account.',
                        doc = {};
                    Meteor.call('User/Log', log, doc);

                    Router.go('/canvasSheet');
                });
            }

        });

        return false;
    },
});
