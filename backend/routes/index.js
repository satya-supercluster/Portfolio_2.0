const router = require('express').Router();
const mailer = require('../controller/mailer')

router.post('/mailer',mailer);

module.exports = router;