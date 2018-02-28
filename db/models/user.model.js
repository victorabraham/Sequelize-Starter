const Sequelize = require('sequelize');
const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    get() {
      const title = this.getDataValue('title');
      // 'this' allows you to access attributes of the instance
      return this.getDataValue('firstName') + ' ' + this.getDataValue('lastName');
    },
  },
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
    primaryKey: true,
    validate: { isEmail: true }
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
