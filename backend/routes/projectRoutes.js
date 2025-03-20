const express = require("express");
const { getTopProjects, addProject } = require("../controllers/projectController");

const router = express.Router();

router.get("/top", getTopProjects);
router.post("/", addProject);

module.exports = router;