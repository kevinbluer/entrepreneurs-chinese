Accounts.onCreateUser(function(options, user) {

  user.profile = options.profile || {};
  user.profile.modules = {};

  return user;
});