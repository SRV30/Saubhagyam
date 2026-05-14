const Testimonial = require('../models/Testimonial');
const { hasLink, hasProfanity, isSpamPattern } = require('../utils/reviewModeration');

const createTestimonial = async (req, res, next) => {
  try {
    const { fullName, review, rating } = req.body;
    if (!fullName || !review || !rating) return res.status(400).json({ success: false, message: 'Missing required fields' });
    if (review.trim().length < 20) return res.status(400).json({ success: false, message: 'Review must be at least 20 characters' });
    if (hasLink(review) || hasProfanity(review) || isSpamPattern(review)) return res.status(400).json({ success: false, message: 'Review rejected by moderation filters' });

    const duplicate = await Testimonial.findOne({ fullName: fullName.trim(), review: review.trim(), createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) } });
    if (duplicate) return res.status(409).json({ success: false, message: 'Duplicate review detected' });

    const totalCount = await Testimonial.countDocuments();
    const approvedCount = await Testimonial.countDocuments({ isApproved: true, rating: 5 });
    const isAutoApprove = totalCount > 10 && Number(rating) === 5;
    const isApproved = totalCount < 10 ? false : isAutoApprove;

    const testimonial = await Testimonial.create({ fullName, review, rating: Number(rating), isApproved });

    return res.status(201).json({
      success: true,
      message: totalCount < 10 ? 'Review submitted for manual approval' : 'Review submitted successfully',
      data: testimonial,
      meta: { totalCount, approvedCount }
    });
  } catch (error) {
    return next(error);
  }
};

const getPublicTestimonials = async (_req, res, next) => {
  try {
    const totalCount = await Testimonial.countDocuments();
    const query = totalCount > 10 ? { rating: 5, isApproved: true } : { rating: 5, isApproved: true };
    const testimonials = await Testimonial.find(query).sort({ createdAt: -1 }).limit(30).lean();
    res.json({ success: true, data: testimonials });
  } catch (error) {
    next(error);
  }
};

module.exports = { createTestimonial, getPublicTestimonials };
