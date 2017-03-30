const sha1 = require('sha1');
const express = require('express');
const router = express.Router();

const UserModel = require('../models/users');
const checkNotLogin = require('../middlewares/check').checkNotLogin;

router.post('/', function(req, res, next) {
  res.json({'code':200,'data':'登录成功'})
});

module.exports = router;
