const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    degree:{
        type: String,
        enum: ["beginner", "intermediate", "high"],
        default: "beginner",
    },
},{
    timestamps: true,
});

module.exports = mongoose.model("Skill", skillSchema);