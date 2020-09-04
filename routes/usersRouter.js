const { Router } = require('express');

const {
  getAllUsers,
  createOneUser,
  updateOneUser,
  deleteOneUser,
} = require('../controllers/usersController');

const router = Router();

router.route('/').get(getAllUsers).post(createOneUser);

router
  .route('/:id')
  .get(updateOneUser)
  .patch(updateOneUser)
  .delete(deleteOneUser);

module.exports = router;
