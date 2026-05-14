const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true, maxlength: 80 },
  review: { type: String, required: true, trim: true, minlength: 20, maxlength: 1200 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  isApproved: { type: Boolean, default: false }
}, { timestamps: true });

testimonialSchema.index({ createdAt: -1 });

testimonialSchema.set('toJSON', {
  transform: (_doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
