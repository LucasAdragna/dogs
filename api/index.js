/** @format **/

const server = require("./src/app.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
const { PORT } = process.env;
//Syncing all the models at once.
server.listen(PORT, async () => {
  await conn.sync({ force: false });
  console.log("Server raised in port: " + PORT);
});
