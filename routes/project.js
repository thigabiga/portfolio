const   router = require("express").Router(),
        projects = require("../data/projects.json")["projects"];

router.get("/project/:whatever", (req, res) => {
    
    let whateverID = req.params.whatever;
    let theProject = null;
    
    projects.forEach((e) => {
        if (e["id"] === parseInt(whateverID, 10)) {
            theProject = e;
        };
    });    
    
    res.render("project", {
        myproject : theProject
    });
});

module.exports = router;