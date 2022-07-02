const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

server.listen(3001, () => {
  console.log("Running");
});

app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
