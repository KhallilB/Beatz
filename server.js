const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
