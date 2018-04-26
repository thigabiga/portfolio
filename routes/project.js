const router = require("express").Router();

let projects = require("../data/projects.json")["projects"];

router.get("/project/:whatever", (req, res) => {
    
    let whateverID = req.params.whatever;
    let theProject = null;
    
    projects.forEach((e) => {
        if (e["id"] === whateverID) {
            theProject = e;
        };
    });    
    
    res.render("project", {
        myproject : theProject
    });
});

module.exports = router;
