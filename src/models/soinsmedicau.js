/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "soinsmedicau",
    {
      id: {
        type: DataTypes.STRING(25),
        allowNull: false,
        primaryKey: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      deleted: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
      },
      createAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updateAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "soinsmedicau",
      timestamps: false,
    }
  );
};
