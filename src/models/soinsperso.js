/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "soinsperso",
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
      tableName: "soinsperso",
      timestamps: false,
    }
  );
};
