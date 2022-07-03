const { faker } = require('@faker-js/faker');

'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const randomLikesList = (nUsers, nPosts) => {
            const likesList = []
            // postId: DataTypes.INTEGER,
            // userId: DataTypes.INTEGER,
            // createdAt: new Date(),
            // updatedAt: new Date()
            Array.from(new Array(nUsers)).forEach((element, key1) => {
                Array.from(new Array(nPosts)).forEach((element, key2) => {
                    const like = {
                        postId: key2 + 1,
                        userId: key1 + 1,
                        createdAt: new Date(),
                        updatedAt: new Date()
                    }
                    likesList.push(like)
                })
            })
            return likesList
        }
        return await queryInterface.bulkInsert('likes', randomLikesList(10, 100));
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
