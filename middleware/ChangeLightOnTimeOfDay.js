const axios = require('axios');
const PORT = process.env.PORT || 42000;

g_bri = 120;
let lasthour = 0;

const ChangeLightOnTimeOfDay = () => {
  const date = new Date();
  const hour = date.getHours();
  let hue = 10000;
  let sat = 254;
  let bri = g_bri;
  let setBri = false;
  if (hour > lasthour) {
    lasthour = hour;
    if (hour == 3 || 6 || 9 || 12 || 15 || 18 || 21 || 24) {
      setBri = true;
    }
  }

  switch (hour) {
    case 24:
    case 0:
    case 1:
    case 2:
      hue = 42000;
      sat = 150;
      if (setBri) {
        bri = 30;
      }
      break;
    case 3:
    case 4:
    case 5:
      hue = 51000;
      sat = 150;
      if (setBri) {
        bri = 30;
      }
      break;
    case 6:
    case 7:
    case 8:
      hue = 7000;
      if (setBri) {
        bri = 100;
      }
      break;
    case 9:
    case 10:
    case 11:
      hue = 11000;
      if (setBri) {
        bri = 190;
      }
      break;
    case 12:
    case 13:
    case 14:
      hue = 15000;
      if (setBri) {
        bri = 190;
      }
      break;
    case 15:
    case 16:
    case 17:
      hue = 25000;
      if (setBri) {
        bri = 190;
      }
      break;
    case 18:
    case 19:
    case 20:
      hue = 39000;
      if (setBri) {
        bri = 60;
      }
      break;
    case 21:
    case 22:
    case 23:
      hue = 55000;
      if (setBri) {
        bri = 30;
      }
      break;
  }

  axios.put(`http://localhost:${PORT}/api/connor-bedroom-light/light/${hue}/${bri}/${sat}`);

  setTimeout(() => {
    ChangeLightOnTimeOfDay();
  }, 2000);
};

module.exports = { ChangeLightOnTimeOfDay };
