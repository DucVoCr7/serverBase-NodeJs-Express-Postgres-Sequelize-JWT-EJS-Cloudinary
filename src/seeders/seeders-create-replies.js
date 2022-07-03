const { faker } = require('@faker-js/faker');

'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const randomRepliesList = (nReplies, nComments) => {
            const repliesList = []
            // commentId: DataTypes.INTEGER,
            // userId: DataTypes.INTEGER,
            // content: DataTypes.TEXT,
            // createdAt: new Date(),
            // updatedAt: new Date()
            Array.from(new Array(nComments)).forEach((element, key1) => {
                Array.from(new Array(nReplies)).forEach((element, key2) => {
                    const reply = {
                        commentId: key1 + 1,
                        userId: faker.mersenne.rand(1, 10), //
                        content: faker.lorem.lines(), //
                        createdAt: new Date(),
                        updatedAt: new Date()
                    }
                    repliesList.push(reply)
                })
            })
            return repliesList
        }
        return await queryInterface.bulkInsert('replies', randomRepliesList(2, 200));
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
