const express = require('express');
const router = express.Router();
const sess = require('../middlewares/session');
const controlleur = require('../controlleur/ctrl');

// middlewares
router.use(sess.corsExp);
router.use(express.json());

router.get('/', controlleur.index);
router.get('/clearcookie', sess.clearCookie, controlleur.index);
router.get('/secure', sess.checkCookie, controlleur.secure);
router.get('/setcookie', sess.setCookieInRedis, sess.sendCookie);

module.exports = router