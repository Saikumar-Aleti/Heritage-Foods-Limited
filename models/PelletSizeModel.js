const Sequelize = require("sequelize");
const { sequelize } = require("../db/connect");

const PelletSize = sequelize.define("pellet_sizes", {
  pellet_size_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  pellet_size: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Please provide a pellet size!",
      },
    },
  },
});

module.exports = PelletSize;
