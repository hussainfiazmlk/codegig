import { DataTypes } from "sequelize";

import dbconnection from "../config/dbconnection.js";

const Gig = dbconnection.define("gig", {
  title: {
    type: DataTypes.STRING,
    required: true,
  },
  technologies: {
    type: DataTypes.STRING,
    required: true,
  },
  budget: {
    type: DataTypes.STRING,
    required: true,
  },
  description: {
    type: DataTypes.TEXT,
    required: true,
  },
  email: {
    type: DataTypes.STRING,
    required: true,
  },
});

export default Gig;
