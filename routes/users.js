const express = require('express');
const router = express.Router();


//LOGIN Page
router.get('/login', (req, res) => res.send('LOGIN'));

//REGISTER Page
router.get('/register', (req, res) => res.send('REGISTER'));

module.exports = router;