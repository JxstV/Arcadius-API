const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(["/api/v1/equipment/fishingrod/simplerod",
            "/api/v1/equipment/fishingrod/birchrod",
            "/api/v1/equipment/fishingrod/oakrod",
            "/api/v1/equipment/fishingrod/advancerod",
           ]);
});

module.exports = router;