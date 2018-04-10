const router = require("express").Router();

let projects = require("../data/projects.json")["projects"];

router.get("/project:projectTitle", (req, res) => {
    
    var project = projects
    
    res.render("project", {
        projects : projects
    });
});

module.exports = router;
