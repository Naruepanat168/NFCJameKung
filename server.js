const express = require('express');
const mongosse = require('mongoose');
const part = require('path')
require('dotenv').config();
const app = express();
const { readdirSync } = require('fs');


app.set('views',part.join(__dirname,'views'))
app.set('view engine','eje')

// เชื่อมต่อฐานข้อมูล
mongosse.connect(process.env.DATABEST).then(console.log('<<connected>>'));

// router
readdirSync('./router').map((router) => app.use('/product', require('./router/' + router)));

// port
const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log('server running... on port', port)
);
