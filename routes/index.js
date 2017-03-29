const express = require('express');
const router = express.Router();
const signup = require('./signup');
const signin = require('./signin');
const signout = require('./signout');

/* GET users listing. */
router.get('/signin', function(req, res, next) {
  res.json({'code':200,'data':'登录成功'})
});

module.exports = router;
