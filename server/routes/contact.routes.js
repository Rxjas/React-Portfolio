const router = require('express').Router();
const { Contact } = require('../models');

// /api/contact/
router.route('/')
    .post((req, res) => {
        console.log(req.body);
        Contact.create(req.body)
        .then(newContact => {
            console.log(newContact);
            res.json({ Success: true });
        })
        .catch((err) => {
            console.log(err);
            res.json({ Success: false })
        }) 
    });

    module.exports = router;