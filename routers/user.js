const express = require('express');

const {
  getSingleUser,
  getUsers,
  getPopularUsers,
  getUsersPosts,
} = require('../controllers/user.js');
const {
  checkUserExist,
} = require('../middlewares/database/databaseErrorHelpers');

const router = express.Router();

router.get('/', getUsers);
router.get('/popular', getPopularUsers);
router.get('/:id', checkUserExist, getSingleUser);
router.get('/:id/posts', checkUserExist, getUsersPosts);

module.exports = router;
