/** @format */


const controllersTemp = require("../controllers/controllersTemp");

const handlerTemp = async (req, res) => {
    let temperaments = await controllersTemp();
  try {
      res.status(200).send( temperaments );
  } catch (error) {
    res.status(400).json({ error: error.error });
  }
};
module.exports = handlerTemp;
