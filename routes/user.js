const express = require('express');
const router = express.Router();
const {handleUserSignUp} = require('../controllers/user');
const {handleUserLogin} =  require('../controllers/user.js');

router.post('/signup',handleUserSignUp);
router.post('/login',handleUserLogin);


module.exports = {
    router,
};