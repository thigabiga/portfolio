const express = require("express"),
      router = express.Router();

router.get("/code", (req, res) => {
    res.render("code");
});

module.exports = router;