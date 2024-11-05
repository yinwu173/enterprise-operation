const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThoughtById)
  .put(updateThoughtById)
  .delete(deleteThoughtById);


router.route('/:thoughtId/reactions').post(createReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router;