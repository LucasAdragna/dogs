/** @format */

const createDog = require("../controllers/createDog");

const handlerPost = async (req, res) => {
  const props = req.body;
  console.log("props", props);
  try {
    const newDog = await createDog(props);
    res.status(200).json(newDog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPost;
