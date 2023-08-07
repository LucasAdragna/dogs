/** @format */

const getId = require("../controllers/controllerstId");

const handlerId = async (req, res) => {
  const { id } = req.params;

  const source = Number(id) ? "api" : "bdd";
  try {
    const data = await getId(id, source);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = handlerId;
