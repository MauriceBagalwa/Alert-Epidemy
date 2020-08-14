/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.STRING(25),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    postname: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    mail: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    isActive: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: 1
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users'
  });
};
