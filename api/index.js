const express = require('express');

const equipment = require('./equipment');

const fishingrod = require('./equipment/fishing/fishingrod');
const simplerod = require('./equipment/fishing/simplerod');
const birchrod = require('./equipment/fishing/birchrod');
const oakrod = require('./equipment/fishing/oakrod');
const advancerod = require('./equipment/fishing/advancerod');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    Equipment: '/equipment'
  });
});

router.use('/equipment', equipment);
router.use('/fishingrod', fishingrod);
router.use('/simplerod', simplerod);
router.use('/birchrod', birchrod);
router.use('/oakrod', oakrod);
router.use('/advancerod', advancerod);

module.exports = router;