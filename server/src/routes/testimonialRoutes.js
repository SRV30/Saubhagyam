const { Router } = require('express');
const { createTestimonial, getPublicTestimonials } = require('../controllers/testimonialController');

const router = Router();

router.get('/', getPublicTestimonials);
router.post('/', createTestimonial);

module.exports = router;
