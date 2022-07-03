'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class musics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      musics.belongsTo(models.users, {foreignKey:'userId'})
    }
  }
  musics.init({
    userId: DataTypes.INTEGER,
    music: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'musics',
  });
  return musics;
};