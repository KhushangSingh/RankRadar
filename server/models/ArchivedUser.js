const mongoose = require('mongoose');

// This collection stores a full snapshot of a user's data at the time they
// deleted their account. It is never exposed via any API route and exists
// purely for internal safety / audit purposes.
const archivedUserSchema = mongoose.Schema(
  {
    // Original MongoDB _id of the user so we can correlate records if needed
    originalId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: { type: String },
    email: { type: String },
    password: { type: String },   // kept hashed — never plain text
    cgpa: { type: Number },
    degree: { type: String },
    branch: { type: String },
    specialization: { type: String },
    batch: { type: Number },
    college: { type: String },
    anonymousName: { type: String },
    friendCode: { type: String },
    friends: [{ type: mongoose.Schema.Types.ObjectId }],
    isDummy: { type: Boolean, default: false },

    // When the original account was created & when it was deleted
    originalCreatedAt: { type: Date },
    deletedAt: { type: Date, default: Date.now },
  },
  {
    // Store in a separate "archivedusers" collection — not "users"
    collection: 'archivedusers',
  }
);

module.exports = mongoose.model('ArchivedUser', archivedUserSchema);
