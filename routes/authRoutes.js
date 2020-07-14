const passport = require('passport');

module.exports = (app) => {
  // first call to google
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  // 2nd call to google
  app.get('/auth/google/callback', passport.authenticate('google'));
};
