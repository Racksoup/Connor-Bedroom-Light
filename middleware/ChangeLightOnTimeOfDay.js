const axios = require('axios');
const PORT = process.env.PORT || 42000;

const ChangeLightOnTimeOfDay = () => {
  const date = new Date();
  const hour = date.getHours();
  let hue = 10000;
  let bri = 120;

  switch (hour) {
    case 1:
    case 2:
    case 3:
      hue = 55000;
      bri = 50;
      break;
    case 4:
    case 5:
    case 6:
      hue = 51000;
      bri = 50;
      break;
    case 7:
    case 8:
    case 9:
      hue = 7000;
      bri = 190;
      break;
    case 10:
    case 11:
    case 12:
      hue = 11000;
      bri = 190;
      break;
    case 13:
    case 14:
    case 15:
      hue = 15000;
      bri = 190;
      break;
    case 16:
    case 17:
    case 18:
      hue = 25000;
      bri = 190;
      break;
    case 19:
    case 20:
    case 21:
      hue = 37000;
      bri = 170;
      break;
    case 22:
    case 23:
    case 24:
    case 0:
      hue = 42000;
      bri = 60;
      break;
  }

  axios.put(`http://localhost:${PORT}/api/connor-bedroom-light/light/${hue}/${bri}`);

  setTimeout(() => {
    ChangeLightOnTimeOfDay();
  }, 3000);
};

module.exports = { ChangeLightOnTimeOfDay };
