const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const {
  ChangeLightOnTimeOfDay,
} = require("./middleware/ChangeLightOnTimeOfDay");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api/connor-bedroom-light",
  require("./routes/api/connorBedroomLight")
);

const PORT = 42000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

ChangeLightOnTimeOfDay();

// curl http://192.168.2.42:42000/api/connor-bedroom-light

//huebridge 192.168.2.11
//pi 192.168.2.10
//comp 192.168.2.15

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
  });
});
