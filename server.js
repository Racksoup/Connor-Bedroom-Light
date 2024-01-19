const express = require('express');
const dotenv = require('dotenv');
const { ChangeLightOnTimeOfDay } = require('./middleware/ChangeLightOnTimeOfDay');

dotenv.config();

const app = express();

app.use(express.json({ extend: false }));

app.use('/api/connor-bedroom-light', require('./routes/api/connorBedroomLight'));

const PORT = 42000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

ChangeLightOnTimeOfDay();

// curl http://192.168.2.42:42000/api/connor-bedroom-light

//huebridge 192.168.2.11
//pi 192.168.2.10
//comp 192.168.2.15
