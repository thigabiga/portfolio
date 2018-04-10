const router = require("express").Router();

router.get("/project", (req, res) => {
    res.render("project");
});

module.exports = router;