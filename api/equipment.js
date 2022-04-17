const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(["/api/v1/equipment/pickaxes", 
           "/api/v1/equipment/fishingrod",
           "/api/v1/equipment/hatchets"]);
});

module.exports = router;