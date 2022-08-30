const cors = require('cors');
const express = require('express');

const categories = require('./categories');
const posts = require('./posts');
const auth = require('./auth');
const user = require('./user');
const admin = require('./admin');

const router = express.Router();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
router.use(cors(corsOptions));

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});
router.use(express.static('public'));

router.use('/categories', categories);
router.use('/posts', posts);
router.use('/auth', auth);
router.use('/users', user);
router.use('/admin', admin);

module.exports = router;
