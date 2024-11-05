const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users GET all and POST a new user
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:id GET user by ID, PUT to update, DELETE to remove user
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

// ADD and DELETE a friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);



module.exports = router;