import { Op } from "sequelize";

import Gig from "./../models/gigModel.js";

export const createNewGig = async (req, res) => {
  try {
    const newGig = await Gig.create(req.body);
    res.status(201).json({ success: true, data: newGig });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const getAllGig = async (req, res) => {
  try {
    let { term } = req.query;
    term = term.toLowerCase();

    const gigs = await Gig.findAll({
      where: { technologies: { [Op.like]: "%" + term + "%" } },
    });
    res
      .status(200)
      .json({ success: true, totalRecords: gigs.length, data: gigs });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
