const { Router } = require('express');
const router = Router();

const { 
    getSkills, 
    createSkill, 
    updateSkill, 
    deleteSkill 
} = require('../controllers/skill.controller');

router.get('/all', getSkills);
router.post('/create', createSkill);
router.put('/update/:id', updateSkill);
router.delete('/delete/:id', deleteSkill);

module.exports = router;