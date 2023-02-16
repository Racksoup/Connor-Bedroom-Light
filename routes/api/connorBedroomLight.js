const express = require('express');
const router = express.Router();
const axios = require('axios');
const PORT = process.env.PORT || 42000;

// Change Light 2 Color (Connor's Bedroom)
router.put('/light/:hue/:bri/:sat', async (req, res) => {
  const hue = parseInt(req.params.hue);
  const bri = parseInt(req.params.bri);
  const sat = parseInt(req.params.sat);
  try {
    await axios.put(
      `http://${process.env.HUE_BRIDGE_IP}/api/${process.env.HUE_USERNAME}/lights/2/state`,
      {
        on: true,
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

router.get('/', async (req, res) => {
  console.log('Hit!');
});

router.post('/bri/:bri', async (req, res) => {
  g_bri = parseInt(req.params.bri);
  console.log('post');
});

module.exports = router;
