'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comments.hasMany(models.replies, {foreignKey:'commentId'}) 

      comments.belongsTo(models.users, {foreignKey:'userId'})
      comments.belongsTo(models.posts, {foreignKey:'userId'})
    }
  }
  comments.init({
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};