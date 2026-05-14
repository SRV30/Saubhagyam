const { Router } = require('express');
const testimonialRoutes = require('./testimonialRoutes');

const router = Router();

router.get('/health', (_req, res) => {
  res.json({ success: true, message: 'Saubhagyam API is running' });
});

router.use('/testimonials', testimonialRoutes);

module.exports = router;
