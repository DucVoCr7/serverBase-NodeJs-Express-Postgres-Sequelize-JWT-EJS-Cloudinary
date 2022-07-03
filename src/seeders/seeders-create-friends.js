
'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        return await queryInterface.bulkInsert('friends', [
            { userId: 10, friendId: 5, status: false, createdAt: new Date(), updatedAt: new Date() },
            { userId: 10, friendId: 6, status: true, createdAt: new Date(), updatedAt: new Date() },
            { userId: 6, friendId: 10, status: true, createdAt: new Date(), updatedAt: new Date() },
            { userId: 10, friendId: 7, status: false, createdAt: new Date(), updatedAt: new Date() },
            { userId: 1, friendId: 6, status: true, createdAt: new Date(), updatedAt: new Date() },
            { userId: 6, friendId: 1, status: true, createdAt: new Date(), updatedAt: new Date() },
            { userId: 1, friendId: 7, status: false, createdAt: new Date(), updatedAt: new Date() },
            { userId: 1, friendId: 8, status: true, createdAt: new Date(), updatedAt: new Date() },
            { userId: 8, friendId: 1, status: true, createdAt: new Date(), updatedAt: new Date() },
            { userId: 2, friendId: 1, status: false, createdAt: new Date(), updatedAt: new Date() },
            { userId: 2, friendId: 3, status: true, createdAt: new Date(), updatedAt: new Date() },
            { userId: 3, friendId: 2, status: true, createdAt: new Date(), updatedAt: new Date() },
            { userId: 2, friendId: 4, status: false, createdAt: new Date(), updatedAt: new Date() },
            { userId: 2, friendId: 5, status: true, createdAt: new Date(), updatedAt: new Date() },
            { userId: 5, friendId: 2, status: true, createdAt: new Date(), updatedAt: new Date() },
            { userId: 3, friendId: 7, status: false, createdAt: new Date(), updatedAt: new Date() },
            { userId: 3, friendId: 8, status: true, createdAt: new Date(), updatedAt: new Date() },
            { userId: 8, friendId: 3, status: true, createdAt: new Date(), updatedAt: new Date() },
            { userId: 3, friendId: 9, status: false, createdAt: new Date(), updatedAt: new Date() },
            { userId: 3, friendId: 4, status: true, createdAt: new Date(), updatedAt: new Date() },
            { userId: 4, friendId: 3, status: true, createdAt: new Date(), updatedAt: new Date() },
            { userId: 4, friendId: 8, status: false, createdAt: new Date(), updatedAt: new Date() },
            { userId: 4, friendId: 9, status: true, createdAt: new Date(), updatedAt: new Date() },
            { userId: 9, friendId: 4, status: true, createdAt: new Date(), updatedAt: new Date() },
            { userId: 4, friendId: 7, status: false, createdAt: new Date(), updatedAt: new Date() }
        ]);
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
