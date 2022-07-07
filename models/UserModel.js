const Sequelize = require("sequelize");
const { sequelize } = require("../db/connect");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Please provide your first name!",
      },
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Please provide your last name!",
      },
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: { args: true, msg: "Email is already in use!" },
    validate: {
      notNull: {
        msg: "Please provide your email!",
      },
      isEmail: { msg: "Please provide a valid email!" },
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Please provide your password!",
      },
      is: {
        args: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        msg: "Please provide a stringent password with a minimum of 8 letters including an alphabet, a number and a special character!",
      },
    },
  },
});

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

User.prototype.createJWT = function () {
  return jwt.sign({ user_id: this.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

User.prototype.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = { User };
