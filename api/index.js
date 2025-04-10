// api/index.js
// import express from 'express';
// import cors from 'cors';

const express = require('express');
const cors = require('cors');
const criteriaRouter = require('./routes/criteria');
const dssRouter = require('./routes/dss');


const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.use('/api/criteria', criteriaRouter);
app.use('/api/dss', dssRouter);


app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
