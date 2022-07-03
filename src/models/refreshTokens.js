'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class refreshTokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      refreshTokens.belongsTo(models.users, {foreignKey:'userId'})
    }
  }
  refreshTokens.init({
    userId: DataTypes.INTEGER,
    refreshToken: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'refreshTokens',
  });
  return refreshTokens;
};