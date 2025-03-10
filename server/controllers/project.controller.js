const Project = require("../models/project.model");
const asyncHandler = require("../middlewares/async");

// @desc Get all projects
// @route GET /api/v1/projects/all
// @access Public
exports.getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find();

  res.status(200).json({
    success: true,
    message: "All projects fetched.",
    data: projects,
  });
});

// @desc create project
// @route POST /api/v1/projects/create
// @access Public
exports.createProject = asyncHandler(async (req, res) => {
  const { title, description, link } = req.body;

  if (!title || !description || !link) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "Image is required.",
    });
  }

  const project = await Project.create({
    title,
    description,
    link,
    image: req.file.path,
  });

  res.status(201).json({
    success: true,
    message: "Project created.",
    data: project,
  });
});

// @desc update project
// @route PUT /api/v1/projects/update/:id
// @access Public
exports.updateProject = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: `Project ${id} id is required.`,
    });
  }

  if (!req.file) {
    return res.status(400).json({
      message: "Image is required.",
    });
  }

  const project = await Project.findByIdAndUpdate(id, {
    title: req.body.title,
    description: req.body.description,
    link: req.body.link,
    image: req.file.path,
  });

  res.status(200).json({
    success: true,
    message: "Project updated.",
    data: project,
  });
});

// @desc delete project
// @route DELETE /api/v1/projects/delete/:id
// @access Public
exports.deleteProject = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: `Project ${id} id is required.`,
    });
  }

  const project = await Project.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
    message: "Project deleted.",
    data: project,
  });
});