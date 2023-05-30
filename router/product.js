const express = require('express');
const router = express.Router();
const controllerProduct = require('../controller/product')


router.get("/", controllerProduct.get);
router.get("/:id", controllerProduct.getById);
router.post("/", controllerProduct.post);
router.put("/",controllerProduct.update);
router.delete("/:id",controllerProduct.delete);

module.exports = router;