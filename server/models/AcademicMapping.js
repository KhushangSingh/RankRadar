const mongoose = require('mongoose');

const academicMappingSchema = mongoose.Schema(
  {
    degree: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Ensure uniqueness across the combination
academicMappingSchema.index({ degree: 1, branch: 1, specialization: 1 }, { unique: true });

module.exports = mongoose.model('AcademicMapping', academicMappingSchema);
