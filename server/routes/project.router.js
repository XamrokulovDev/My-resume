const express = require("express");

const router = express.Router();

const {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/project.controller");
const upload = require("../utils/upload");

router.get("/all", getProjects);
router.post("/create", upload.single("image"), createProject);
router.put("/update/:id", upload.single("image"), updateProject);
router.delete("/delete/:id", deleteProject);

module.exports = router;