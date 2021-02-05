//restful API
const router = require('express').Router();
const contact = require('./contact.routes.js');

// /api/contact
router.use('/api/contact', contact);

module.exports = router;