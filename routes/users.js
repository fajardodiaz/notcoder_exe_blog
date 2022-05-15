const express = require('express');
const router = express.Router();
const { validate, Joi } = require("express-validation");

const {getUser, getUserByID, createUser} = require('../controllers/users.js');


const userValidation = {
    body: Joi.object({
        name: Joi.string().required().min(2).max(75),
        nickname: Joi.string().required().min(3).max(30),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        repeat_password: Joi.ref('password'),
    })
};

/* GET users listing. */
router.get('/', getUser );
router.get('/:id', getUserByID);
router.post('/', validate(userValidation), createUser);
router.put('/:id', );
router.delete('/:id', );


module.exports = router;
