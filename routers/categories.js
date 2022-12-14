const express = require('express');
const {
  getAllCategories,
  getSingleCategory,
  createCategory,
  getAllPostByCategory,
  getFeaturedCategories,
  getPopularCategories,
  followCategory,
} = require('../controllers/categories');
const { getAccessToRoute } = require('../middlewares/authorization/auth');

const {
  checkCategoryExist,
} = require('../middlewares/database/databaseErrorHelpers');
const router = express.Router();

router.get('/', getAllCategories);
router.get('/featured', getFeaturedCategories);
router.get('/popular', getPopularCategories);
//router.get('/:id', checkCategoryExist, getSingleCategory);
router.get('/:id', [checkCategoryExist], getAllPostByCategory);
router.post('/create', createCategory);
router.get('/:id/follow', [getAccessToRoute], followCategory);

module.exports = router;
