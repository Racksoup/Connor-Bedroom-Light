const axios = require('axios');
const PORT = process.env.PORT || 42000;

bri = 120;
hue = 5461 * 11;
sat = 120;
on = true;
let lasthour = 0;

const ChangeLightOnTimeOfDay = () => {
  // const date = new Date();
  // const hour = date.getHours();
  // let resetLightState = false;

  // // reset light state every 3 hours, or first loop
  // if (hour > lasthour) {
  //   lasthour = hour;
  //   if (hour == 3 || 6 || 9 || 12 || 15 || 18 || 21 || 24) {
  //     resetLightState = true;
  //   }
  // }

  // // changes light values
  // if (resetLightState) {
  //   switch (hour) {
  //     case 24:
  //     case 0:
  //     case 1:
  //     case 2:
  //       hue = 42000;
  //       break;
  //     case 3:
  //     case 4:
  //     case 5:
  //       hue = 51000;
  //       break;
  //     case 6:
  //     case 7:
  //     case 8:
  //       hue = 7000;
  //       break;
  //     case 9:
  //     case 10:
  //     case 11:
  //       hue = 11000;
  //       break;
  //     case 12:
  //     case 13:
  //     case 14:
  //       hue = 15000;
  //       break;
  //     case 15:
  //     case 16:
  //     case 17:
  //       hue = 25000;
  //       break;
  //     case 18:
  //     case 19:
  //     case 20:
  //       hue = 39000;
  //       break;
  //     case 21:
  //     case 22:
  //     case 23:
  //       hue = 55000;
  //       break;
  //   }
  // }

  // turns light on and off
  if (bri == 1) {
    on = false;
  } else {
    on = true;
  }

  // sends message to route that changes light
  axios.put(`http://localhost:${PORT}/api/connor-bedroom-light/light/`, {
    hue,
    bri,
    sat,
    on,
  });

  // loop every 2 seconds
  setTimeout(() => {
    ChangeLightOnTimeOfDay();
  }, 2000);
};

module.exports = { ChangeLightOnTimeOfDay };
