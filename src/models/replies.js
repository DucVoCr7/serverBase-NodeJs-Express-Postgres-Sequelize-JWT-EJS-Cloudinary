'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class replies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      replies.belongsTo(models.users, {foreignKey:'userId'})
      replies.belongsTo(models.comments, {foreignKey:'commentId'})
    }
  }
  replies.init({
    commentId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'replies',
  });
  return replies;
};