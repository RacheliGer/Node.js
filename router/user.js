const express = require('express');
const router = express.Router();
const controllerUser = require('../controller/user')


router.get("/", controllerUser.get);
router.post("/", controllerUser.post);
router.get("/login",controllerUser.login)

module.exports = router;