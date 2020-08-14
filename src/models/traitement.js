/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "traitement",
    {
      id: {
        type: DataTypes.STRING(25),
        allowNull: false,
        primaryKey: true,
      },
      epidemie: {
        type: DataTypes.STRING(25),
        allowNull: true,
        references: {
          model: {
            tableName: "epidemie",
          },
          key: "id",
        },
      },
      medicau: {
        type: DataTypes.STRING(25),
        allowNull: true,
        references: {
          model: {
            tableName: "soinsmedicau",
          },
          key: "id",
        },
      },
      perso: {
        type: DataTypes.STRING(25),
        allowNull: true,
        references: {
          model: {
            tableName: "soinsperso",
          },
          key: "id",
        },
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
      tableName: "traitement",
      timestamps: false,
    }
  );
};
