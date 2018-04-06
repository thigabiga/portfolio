const router = require("express").Router();

router.get("/work", (req, res) => {
    res.render("work");
});

module.exports = router;