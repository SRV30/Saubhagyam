const Testimonial = require("../models/Testimonial");

const {
  hasLink,
  hasProfanity,
  isSpamPattern,
} = require("../utils/reviewModeration");

const createTestimonial = async (req, res, next) => {
  try {
    const { fullName, review, rating } = req.body;

    if (!fullName || !review || !rating) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    if (fullName.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid name",
      });
    }

    if (review.trim().length < 20) {
      return res.status(400).json({
        success: false,
        message: "Review must be at least 20 characters",
      });
    }

    if (Number(rating) < 1 || Number(rating) > 5) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5",
      });
    }

    if (hasLink(review) || hasProfanity(review) || isSpamPattern(review)) {
      return res.status(400).json({
        success: false,
        message: "Review rejected by moderation filters",
      });
    }

    const duplicate = await Testimonial.findOne({
      fullName: fullName.trim(),
      review: review.trim(),
      createdAt: {
        $gte: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    });

    if (duplicate) {
      return res.status(409).json({
        success: false,
        message: "Duplicate review detected",
      });
    }

    const totalCount = await Testimonial.countDocuments();

    const isApproved = totalCount < 10 ? true : Number(rating) === 5;

    const testimonial = await Testimonial.create({
      fullName: fullName.trim(),
      review: review.trim(),
      rating: Number(rating),
      isApproved,
    });

    return res.status(201).json({
      success: true,
      message:
        totalCount < 10
          ? "Review submitted successfully"
          : "Review submitted for approval",
      data: testimonial,
      meta: {
        totalReviews: totalCount + 1,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getPublicTestimonials = async (_req, res, next) => {
  try {
    const totalCount = await Testimonial.countDocuments();

    const query = { rating: 5 };
    const testimonials = await Testimonial.find(query)
      .sort({ createdAt: -1 })
      .limit(30)
      .lean();

    return res.status(200).json({
      success: true,
      count: testimonials.length,
      data: testimonials,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTestimonial,
  getPublicTestimonials,
};
