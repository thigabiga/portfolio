const router = require("express").Router();
const projects = require("../data/projects.json")["projects"];

router.get("/project/:id", (req, res) => {
    
    let projectId = req.params.id;
    let project = null;
    
    projects.forEach((e) => {
        if (e["id"] === parseInt(projectId, 10)) {
            project = e;
        };
    });    
    
    res.render("project", {
        project : project
    });
});

module.exports = router;