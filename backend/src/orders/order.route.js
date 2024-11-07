const express = require('express');
const { createAOrder, getOrderByEmail } = require('./order.controller');

const router = express.Router();

router.post("/", createAOrder);

router.get("/email/:email", getOderByEmail);

module.exports = router;