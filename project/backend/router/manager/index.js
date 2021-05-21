const express = require("express");
const router = express.Router();

router.get("/hi", () => {
    console.log("hi");
    return res.status(200).json({
        status: true
    });
});

module.exports = router;