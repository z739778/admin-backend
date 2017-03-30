const express = require('express');
const router = express.Router();

const checkLogin = require('../middlewares/check').checkLogin;

// GET /signout 登出
router.get('/', checkLogin, function(req, res, next) {
  // 清空 session 中用户信息
  req.session.user = null;
  req.json({'code': 200,'data':'登出成功'});
});

module.exports = router;
