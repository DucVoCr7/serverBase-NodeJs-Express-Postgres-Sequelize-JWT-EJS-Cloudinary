const { faker } = require('@faker-js/faker');

'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const randomCommentsList = (nComments, nPosts) => {
            const commentsList = []
            // userId: DataTypes.INTEGER,
            // postId: DataTypes.INTEGER,
            // content: DataTypes.TEXT,
            // createdAt: new Date(),
            // updatedAt: new Date()
            Array.from(new Array(nPosts)).forEach((element, key1) => {
                Array.from(new Array(nComments)).forEach((element, key2) => {
                    const comment = {
                        userId: faker.mersenne.rand(1, 10),
                        postId: key1 + 1,
                        content: faker.lorem.lines(),
                        createdAt: new Date(),
                        updatedAt: new Date()
                    }
                    commentsList.push(comment)
                })
            })
            return commentsList
        }
        return await queryInterface.bulkInsert('comments', randomCommentsList(2, 100));
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
