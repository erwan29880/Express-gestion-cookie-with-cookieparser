const express = require('express');
const router = express.Router();
const sess = require('../middlewares/session');
const controlleur = require('../controlleur/ctrl');

// middlewares
router.use(sess.corsExp);
router.use(express.json());

router.get('/', controlleur.index);

module.exports = router