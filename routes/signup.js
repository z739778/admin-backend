const fs = require('fs');
const path = require('path');
const sha1 = require('sha1');
const express = require('express');
const router = express.Router();

const UserModel = require('../models/users');
const checkNotLogin = require('../middlewares/check').checkNotLogin;

router.post('/', checkNotLogin,function(req, res, next) {
  res.json({'code':200,'data':'登录成功'})
});
// POST /signup 用户注册
// router.post('/', checkNotLogin, function(req, res, next) {
//   const name = req.fields.name;
//   const password = req.fields.password;

//   // 明文密码加密
//   password = sha1(password);

//   // 待写入数据库的用户信息
//   const user = {
//     name: name,
//     password: password,
//   };
//   // 用户信息写入数据库
//   UserModel.create(user)
//     .then(function (result) {
//       // 此 user 是插入 mongodb 后的值，包含 _id
//       user = result.ops[0];
//       // 将用户信息存入 session
//       delete user.password;
//       req.session.user = user;
//       req.json({code:200,data:'w'});
//     })
//     .catch(function (e) {
//       // 用户名被占用则跳回注册页，而不是错误页
//       if (e.message.match('E11000 duplicate key')) {
//         req.json('code':203, data:'用户名已被占用');
//       }
//       next(e);
//     });
// });

module.exports = router;
