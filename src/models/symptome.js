/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('symptome', {
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
    frequent: {
      type: DataTypes.STRING(25),
      allowNull: true,
      references: {
        model: {
          tableName: 'symptomefrequent',
        },
        key: 'id'
      }
    },
    moinsFrequent: {
      type: DataTypes.STRING(25),
      allowNull: true,
      references: {
        model: {
          tableName: 'symptomemoinsfrequent',
        },
        key: 'id'
      }
    },
    deleted: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    createAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updateAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'symptome'
  });
};
