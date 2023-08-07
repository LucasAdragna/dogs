/** @format */

const express = require("express");
const handlerPost = require("../handlers/handlerPost");
const postRouter = express.Router();

postRouter.post("/", handlerPost);

module.exports = postRouter;
