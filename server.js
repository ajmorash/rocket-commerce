const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const config = require('config')

const app = express();

//CORS Middleware
app.use(cors());

// Bodyparser Middleware
app.use(express.json());

//DB Config
const db = config.get('mongoURI');

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Mongo DB Connected'))
  .catch(err => console.log(err));

//Use Routes
app.use('/api/products', require('./api/routes/Products.js'));
app.use('/api/orders', require('./api/routes/Orders.js'));
app.use('/api/users', require('./api/routes/Users.js'));
app.use('/api/auth', require('./api/routes/Auth.js'));

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server started on port ${port}`));
