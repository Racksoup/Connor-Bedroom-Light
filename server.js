const express = require("express");
const dotenv = require("dotenv");
const https = require("https");
const fs = require("fs");
const cors = require('cors');
const {
  ChangeLightOnTimeOfDay,
} = require("./middleware/ChangeLightOnTimeOfDay");

dotenv.config();

const app = express();

const corsOptions = {
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions));
app.use(express.json());

app.use(
  "/api/connor-bedroom-light",
  require("./routes/api/connorBedroomLight")
);

// Load SSL certificate
const sslOptions = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert"),
};

// Start HTTPS server
const PORT = 42000;
https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`🔐 HTTPS Server started on port ${PORT}`);
});

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
