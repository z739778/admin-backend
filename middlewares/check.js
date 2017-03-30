module.exports = {
  checkLogin: function checkLogin(req, res, next) {
    if (!req.session.user) {
      req.json({'code': 203,'data':'未登录'});
    }
    next();
  },

  checkNotLogin: function checkNotLogin(req, res, next) {
    if (req.session.user) {
      req.json({'code': 200,'data':'已登录'});
    }
    next();
  }
};
