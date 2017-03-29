module.exports = {
  port: 3000,
  session: {
    secret: 'admin',
    key: 'admin',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/admin'
};
