const express = require("express");
const router = express.Router();
const axios = require("axios");
const PORT = process.env.PORT || 42000;

// Validate environment variables
if (!process.env.HUE_BRIDGE_IP || !process.env.HUE_USERNAME) {
  console.error(
    "HUE_BRIDGE_IP and HUE_USERNAME must be set in the environment variables"
  );
  process.exit(1);
}

// Helper function to make an Axios PUT request with retries
const axiosPutWithRetry = async (url, data, retries = 3, delay = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await axios.put(url, data);
    } catch (error) {
      if (i < retries - 1) {
        console.log(`Retrying request (${i + 1}/${retries})...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        throw error;
      }
    }
  }
};

router.put("/light", async (req, res) => {
  const { hue, bri, sat, on } = req.body;

  try {
    await axiosPutWithRetry(
      `https://${process.env.HUE_BRIDGE_IP}/api/${process.env.HUE_USERNAME}/lights/2/state`,
      { on, hue, bri, sat }
    );
    res.sendStatus(200);
  } catch (error) {
    console.error("Failed to change light state:", error);
    res.status(500).json({ error: "Failed to change light state" });
  }
});

router.post("/set-state", async (req, res) => {
    // set state values
  if (req.body.bri) {
    bri = req.body.bri;
  }
  if (req.body.hue) {
    hue = req.body.hue;
  }
  if (req.body.sat) {
    sat = req.body.sat;
  }
  // turns light on and off
  if (bri <= 30) {
    on = false;
  } else {
    on = true;
  }

  try {
    await axiosPutWithRetry(
      `https://localhost:${PORT}/api/connor-bedroom-light/light/`,
      { hue, bri, sat, on }
    );
    res.sendStatus(200);
  } catch (error) {
    console.error("Failed to set light state:", error);
    res.status(500).json({ error: "Failed to set light state" });
  }
});

module.exports = router;
