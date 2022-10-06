const express = require('express');
const dotenv = require('dotenv');

//Load environment variables
dotenv.config({ path: './config/config.env' });

const app = express();

//This sets up a route for get requests to '/api/v1/bootcamps'
app.get('/api/v1/bootcamps', (req, res) => {
  //res.send({ name: 'Justin' }); //don't need json.stringify, Express will convert this to JSON
  //res.sendResponse(400);//sends a response
  //res.json({ name: 'Justin' }); // Specifiy JSON for the response
  //res.status(400).json({ success: false }); //combine response with content to send
  res.status(200).json({ success: true, data: { msg: 'Show all Bootcamps' } }); //combine response with content to send
});
app.get('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, data: { msg: `Get bootcamp ${req.params.id}` } });
});
app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, data: { msg: 'Create new Bootcamp' } });
});
app.put('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({
    success: true,
    data: { msg: `Update bootcamp ${req.params.id}` },
  });
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, data: { msg: `Delete bootcamp ${req.params.id}` } });
});

const PORT = process.env.PORT || 5001;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
