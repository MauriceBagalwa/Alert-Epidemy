/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Epidemie = sequelize.define(
    "epidemie",
    {
      id: {
        type: DataTypes.STRING(25),
        allowNull: false,
        primaryKey: true,
      },
      epidemie: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      deleted: {
        type: DataTypes.INTEGER(1),
        defaultValue: false,
      },
      createAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updateAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      tableName: "epidemie",
      timestamps: false,
    }
  );
  return Epidemie;
};
