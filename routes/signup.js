const fs = require('fs');
const path = require('path');
const sha1 = require('sha1');
const express = require('express');
const router = express.Router();

const UserModel = require('../models/users');
const checkNotLogin = require('../middlewares/check').checkNotLogin;


// POST /signup 用户注册
router.post('/', checkNotLogin, function(req, res, next) {
  const name = req.fields.name;
  const password = req.fields.password;

  // 校验参数
  try {
    if (!(name.length >= 1 && name.length <= 10)) {
      throw new Error('名字请限制在 1-10 个字符');
    }
    if (password.length < 6) {
      throw new Error('密码至少 6 个字符');
    }
  } catch (e) {
    throw new Error('服务器错误');
  }

  // 明文密码加密
  password = sha1(password);

  // 待写入数据库的用户信息
  const user = {
    name: name,
    password: password,
  };
  // 用户信息写入数据库
  UserModel.create(user)
    .then(function (result) {
      // 此 user 是插入 mongodb 后的值，包含 _id
      user = result.ops[0];
      // 将用户信息存入 session
      delete user.password;
      req.session.user = user;
      // 写入 flash
      req.flash('success', '注册成功');
    })
    .catch(function (e) {
      // 注册失败，异步删除上传的头像
      fs.unlink(req.files.avatar.path);
      // 用户名被占用则跳回注册页，而不是错误页
      if (e.message.match('E11000 duplicate key')) {
        req.flash('error', '用户名已被占用');
      }
      next(e);
    });
});

module.exports = router;
