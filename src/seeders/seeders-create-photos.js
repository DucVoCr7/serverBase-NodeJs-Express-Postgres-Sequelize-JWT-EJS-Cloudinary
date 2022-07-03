const { faker } = require('@faker-js/faker');

'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const randomPhotosList = (nPhotos, nUsers) => {
            const photosList = []
            // userId: DataTypes.INTEGER,
            // photo: DataTypes.STRING,
            // createdAt: new Date(),
            // updatedAt: new Date()
            Array.from(new Array(nUsers)).forEach((element, key1) => {
                Array.from(new Array(nPhotos)).forEach((element, key2) => {
                    const photo = {
                        userId: key1 + 1,
                        photo: faker.image.image(1280, 720).replace('http://', 'https://'), //
                        createdAt: new Date(),
                        updatedAt: new Date()
                    }
                    photosList.push(photo)
                })
            })
            return photosList
        }
        return await queryInterface.bulkInsert('photos', randomPhotosList(10, 10));
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
