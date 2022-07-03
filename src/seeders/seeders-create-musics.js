const { faker } = require('@faker-js/faker');

'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const randomMusicsList = (nUsers) => {
            const musicsList = []
            // userId: DataTypes.INTEGER,
            // music: DataTypes.STRING,
            // createdAt: new Date(),
            // updatedAt: new Date()
            Array.from(new Array(nUsers)).forEach((element, key) => {
                const music = {
                    userId: key + 1,
                    music: faker.helpers.arrayElement(['Qzc_aX8c8g4', 'cPkE0IbDVs4', 'YfDqONbzYPc', '60ItHLz5WEA', 'YQHsXMglC9A', '3AtDnEC4zak', 'bo_efYhYU2A', 'RgKAFK5djSk', 'RBumgq5yVrA', 'ShZ978fBl6Y']),
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
                musicsList.push(music)
            })
            return musicsList
        }
        return await queryInterface.bulkInsert('musics', randomMusicsList(10));
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
