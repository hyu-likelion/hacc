const express = require("express");
const router = express.Router();

router.get("/hi", (req, res) => {
    console.log("hi");
    return res.status(200).json({
        status: true
    });
});

module.exports = router;