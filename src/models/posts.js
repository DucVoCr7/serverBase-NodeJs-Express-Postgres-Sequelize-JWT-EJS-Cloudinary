'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      posts.hasMany(models.comments, {foreignKey: 'postId'})
      posts.hasMany(models.likes, {foreignKey: 'postId'})

      posts.belongsTo(models.users, {foreignKey: 'userId'})
    }
  }
  posts.init({
    userId: DataTypes.INTEGER,
    image: DataTypes.STRING,
    title: DataTypes.TEXT,
    category: DataTypes.STRING,
    content: DataTypes.TEXT,
    likesNumber: DataTypes.INTEGER,
    cloudinary_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};