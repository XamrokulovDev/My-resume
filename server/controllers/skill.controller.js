const Skill = require("../models/skill.model");
const asyncHandler = require("../middlewares/async");

// @desc Get all skills
// @route GET /api/skills/all
// @access Public
exports.getSkills = asyncHandler(async (req, res) => {
    const skills = await Skill.find();

    res.status(200).json({ 
        success: true, 
        message: "All skills fetched.",
        data: skills 
    });
});

// @desc Post a skill
// @route POST /api/skills/create
// @access Public
exports.createSkill = asyncHandler(async (req, res) => {
    const { title, description, degree } = req.body;

    if (!title || !description || !degree) {
        return res.status(400).json({ 
            success: false, 
            message: "All fields are required." 
        });
    }

    const skill = await Skill.create({ title, description, degree });

    res.status(201).json({ 
        success: true, 
        message: "Skill created.",
        data: skill 
    });
});

// @desc Put a skill
// @route PUT /api/skills/update/:id
// @access Public
exports.updateSkill = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ 
            message: `Skill ${id} id is required.` 
        });
    }

    const { title, description, degree } = req.body;

    const skill = await Skill.findByIdAndUpdate(id, { title, description, degree }, { new: true });

    res.status(200).json({ 
        success: true, 
        message: "Skill updated.",
        data: skill 
    });
});

// @desc Delete a skill
// @route DELETE /api/skills/delete/:id
// @access Public
exports.deleteSkill = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!id) {  
        return res.status(400).json({ 
            message: `Skill ${id} id is required.`
        });
    }

    const skill = await Skill.findByIdAndDelete(id);

    res.status(200).json({ 
        success: true, 
        message: "Skill deleted.",
        data: skill 
    });
});