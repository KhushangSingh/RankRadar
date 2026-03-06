const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  updateProfile,
  deleteProfile,
  getLeaderboard,
  addFriend,
  getFriends,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);
router.put('/profile', protect, updateProfile); // To update profile
router.delete('/profile', protect, deleteProfile); // To delete profile
router.get('/leaderboard', protect, getLeaderboard); // Secure leaderboard
router.post('/add-friend', protect, addFriend); // Add friend via code
router.get('/friends', protect, getFriends);   // Get populated friends list

module.exports = router;
