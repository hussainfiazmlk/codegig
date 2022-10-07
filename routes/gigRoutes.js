import express from "express";

import { getAllGig, createNewGig } from "./../controllers/gigController.js";

const router = express.Router();

router.route("/").post(createNewGig).get(getAllGig);

export default router;
