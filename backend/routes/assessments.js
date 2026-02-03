const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: 'Assessments API' });
});

module.exports = router;
