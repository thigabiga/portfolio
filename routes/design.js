const express = require("express"),
      router = express.Router();

router.get("/design", (req, res) => {
    res.render("design");
});

module.exports = router;