const { Router } = require('express');
const { createTestimonial, getPublicTestimonials } = require('../controllers/testimonialController');

const router = Router();

router.get('/get', getPublicTestimonials);
router.post('/create', createTestimonial);

module.exports = router;
