/** @format */

const createDog = require("../controllers/createDog");

const handlerPost = async (req, res) => {
  try {
    const { name, weight, height, image, life_span, temperaments, created } = req.body;
    
    const newDog = await createDog(
      name,
      weight,
      height,
      image,
      life_span,
      temperaments,
      created
    );
    res.status(200).json(newDog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPost;
