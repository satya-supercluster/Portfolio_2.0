const router = require('express').Router();
const mailer = require('../controller/mailer')

router.get('/mailer',mailer);

module.exports = router;