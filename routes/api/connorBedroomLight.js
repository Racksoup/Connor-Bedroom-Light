const express = require('express');
const router = express.Router();
const axios = require('axios');
const PORT = process.env.PORT || 42000;

// Change Light 2 Color (Connor's Bedroom)
router.put('/light', async (req, res) => {
  const { hue, bri, sat, on } = req.body;

  try {
    await axios.put(
      `http://${process.env.HUE_BRIDGE_IP}/api/${process.env.HUE_USERNAME}/lights/2/state`,
      {
        on,
        hue,
        bri,
        sat,
      }
    );
  } catch (error) {
    process.on('uncaughtException', (err) => {
      console.log(err);
    });
  }
});

router.post('/set-state', async (req, res) => {
  console.log(req.body);
  if (req.body.bri) {
    bri = req.body.bri;
  }
  if (req.body.hue) {
    hue = req.body.hue;
  }
  if (req.body.sat) {
    sat = req.body.sat;
  }
  res.status(200);
});

module.exports = router;
