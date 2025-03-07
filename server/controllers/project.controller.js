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

// @desc Post a project
// @route POST /api/v1/projects/create
// @access Public
exports.createProject = asyncHandler(async (req, res) => {
    const { title, description, link } = req.body;

    if ( !title || !description || !link ) {
        return res.status(400).json({
            success: false,
            message: "All fields are required.",
        });
    }

    if( !req.file ) {
        return res.status(400).json({
            success: false,
            message: "Image is required.",
        });
    }

    const project = await Project.create({ title, description, link, image: `req.file.path` });

    res.status(201).json({
        success: true,
        message: "Project created.",
        data: project,
    });
});