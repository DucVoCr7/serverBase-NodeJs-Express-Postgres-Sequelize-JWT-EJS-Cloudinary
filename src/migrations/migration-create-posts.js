'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      // userId: DataTypes.INTEGER,
      // image: DataTypes.STRING,
      // title: DataTypes.TEXT,
      // category: DataTypes.STRING,
      // content: DataTypes.TEXT,
      // likesNumber: DataTypes.INTEGER
      // cloudinary_id: DataTypes.STRING,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.TEXT
      },
      category: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      likesNumber: {
        type: Sequelize.INTEGER
      },
      cloudinary_id: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  }
};