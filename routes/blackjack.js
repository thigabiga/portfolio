const router = require("express").Router();

router.get("/blackjack", (req, res) => { 
    
    res.render("blackjack");
});

module.exports = router;
