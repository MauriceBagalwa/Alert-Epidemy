/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('apercu', {
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
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    decouvert: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    lien: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    niveau: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'apercu'
  });
};
