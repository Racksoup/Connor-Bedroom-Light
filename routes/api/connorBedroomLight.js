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
  console.log('here');
  bri = req.body.bri;
  hue = req.body.hue;
  sat = req.body.sat;
  on = req.body.on;
});

module.exports = router;
