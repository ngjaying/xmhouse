// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const househistory = sequelizeClient.define('househistory', {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true
    },
    houseid: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: 'compositeIndex'
    },
    plotid: {
      type: Sequelize.BIGINT,
      allowNull: false
    },
    plotname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
      unique: 'compositeIndex'
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    unitprice: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    district: {
      type: Sequelize.STRING,
      allowNull: true
    },
    block: {
      type: Sequelize.STRING,
      allowNull: true
    },
    isnew: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    deltaprice: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    visit: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  },{
    timestamps: false,
  });

  househistory.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return househistory;
};
