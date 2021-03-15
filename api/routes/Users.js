const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// Item Model
const User = require('../../models/User');

// @route POST api/users
// @desc Register new user
// @access Public

router.post('/', async (req, res) => {
  const { name, email, password, admin } = req.body;

  if(!name || !email || !password || !admin){
    return res.status(400).json({msg: 'please enter all fields'});
  }

  User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json({msg: 'user already exists'});

      const newUser = User({
        name,
        email,
        password,
        admin
      });

      // Create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              jwt.sign(
                { id: user.id },
                config.get('jwtSecret'),
                { expiresIn: 3600 },
                ( err, token ) => {
                  if(err) throw err;
                  res.json({
                    token,
                    user: {
                      id: user.id,
                      name: user.name,
                      email: user.email,
                      admin: user.admin
                    }
                  })
                }
              )
            })
        });
      });
    })
});


module.exports = router;