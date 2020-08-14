/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prevention', {
    id: {
      type: DataTypes.STRING(25),
      allowNull: false,
      primaryKey: true
    },
    epidemie: {
      type: DataTypes.STRING(25),
      allowNull: true,
      references: {
        model: {
          tableName: 'epidemie',
        },
        key: 'id'
      }
    },
    methode: {
      type: DataTypes.STRING(25),
      allowNull: true,
      references: {
        model: {
          tableName: 'methodeprevention',
        },
        key: 'id'
      }
    },
    deleted: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    creatAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updateAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'prevention'
  });
};
