const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ success: true, data: { msg: 'Show all Bootcamps' } });
});

router.get('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, data: { msg: `Get bootcamp ${req.params.id}` } });
});

router.post('/', (req, res) => {
  res.status(200).json({ success: true, data: { msg: 'Create new Bootcamp' } });
});

router.put('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    data: { msg: `Update bootcamp ${req.params.id}` },
  });
});

router.delete('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, data: { msg: `Delete bootcamp ${req.params.id}` } });
});

module.exports = router;
