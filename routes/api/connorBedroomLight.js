const express = require('express');
const router = express.Router();
const axios = require('axios');
const PORT = process.env.PORT || 4200;

// Change Light 2 Color (Connor's Bedroom)
router.put('/light/:hue/:bri', async (req, res) => {
  const hue = req.params.hue;
  const bri = req.params.bri;
  try {
    await axios.put(
      `http://${process.env.HUE_BRIDGE_IP}/api/${process.env.HUE_USERNAME}/lights/2/state`,
      {
        on: true,
        hue: parseInt(hue),
        bri: parseInt(bri),
      }
    );
  } catch (error) {
    process.on('uncaughtException', (err) => {
      console.log(err);
    });
  }
});

module.exports = router;
