var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({'code':200,'data':'登录成功'})
});

module.exports = router;
