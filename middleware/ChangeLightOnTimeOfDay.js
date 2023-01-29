const axios = require('axios');
const PORT = process.env.PORT || 42000;

const ChangeLightOnTimeOfDay = () => {
  const date = new Date();
  const hour = date.getHours();
  let hue = 10000;
  let bri = 120;
  let sat = 254;

  switch (hour) {
    case 24:
    case 0:
    case 1:
    case 2:
      hue = 42000;
      bri = 30;
      sat = 150;
      break;
    case 3:
    case 4:
    case 5:
      hue = 51000;
      bri = 30;
      sat = 150;
      break;
    case 6:
    case 7:
    case 8:
      hue = 7000;
      bri = 100;
      break;
    case 9:
    case 10:
    case 11:
      hue = 11000;
      bri = 190;
      break;
    case 12:
    case 13:
    case 14:
      hue = 15000;
      bri = 190;
      break;
    case 15:
    case 16:
    case 17:
      hue = 25000;
      bri = 190;
      break;
    case 18:
    case 19:
    case 20:
      hue = 39000;
      bri = 60;
      break;
    case 21:
    case 22:
    case 23:
      hue = 55000;
      bri = 30;
      break;
  }

  axios.put(`http://localhost:${PORT}/api/connor-bedroom-light/light/${hue}/${bri}/${sat}`);

  setTimeout(() => {
    ChangeLightOnTimeOfDay();
  }, 3000);
};

module.exports = { ChangeLightOnTimeOfDay };
