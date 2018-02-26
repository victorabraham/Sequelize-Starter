const Sequelize = require('sequelize');
const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userName: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    primaryKey: true
  },
});

// force: true will drop the table if it already exists
User.sync({
  force: true
}).then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

export default User;
