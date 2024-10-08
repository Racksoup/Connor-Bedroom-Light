const axios = require("axios");
const PORT = process.env.PORT || 42000;

let bri = 90;
let hue = 4461;
let sat = 70;
let on = true;

const ChangeLightOnTimeOfDay = async () => {
  // Turn light on or off based on brightness
  on = bri !== 1;

  try {
    await axios.put(
      `http://localhost:${PORT}/api/connor-bedroom-light/light/`,
      {
        hue,
        bri,
        sat,
        on,
      }
    );
  } catch (error) {
    console.error("Error changing light state:", error);
  }

  // Schedule the next update
  setTimeout(() => {
    ChangeLightOnTimeOfDay();
  }, 2000);
};

module.exports = { ChangeLightOnTimeOfDay };
