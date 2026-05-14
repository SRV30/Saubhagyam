const { Router } = require('express');

const router = Router();

router.get('/health', (_req, res) => {
  res.json({ success: true, message: 'Saubhagyam API is running' });
});

module.exports = router;
