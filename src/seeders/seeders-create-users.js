const { faker } = require('@faker-js/faker');


// Set locale to use Vietnamese


// Function random data
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const randomUsersList = (nUsers) => {
      const usersList = []
      // roleId: DataTypes.STRING,
      // name: DataTypes.STRING,
      // image: DataTypes.STRING,
      // email: DataTypes.STRING,
      // password: DataTypes.STRING,
      // gender: DataTypes.BOOLEAN,
      // phoneNumber: DataTypes.STRING,
      // address: DataTypes.STRING,
      // position: DataTypes.STRING
      // createdAt: new Date(),
      // updatedAt: new Date()
      Array.from(new Array(nUsers)).forEach((element, key) => {
        const user = {
          roleId: 'R1',
          name: faker.name.findName(), //
          image: faker.image.image(400, 400).replace('http://', 'https://'), //
          email: faker.internet.email(), //
          password: '$2a$10$Kj2R4yn/pd5/4mMPocVIputnyLpLOa.n/FIGZnX22eRcUIHEnwU/y',
          gender: faker.datatype.boolean(), //
          phoneNumber: faker.phone.phoneNumber('09########'), //
          address: faker.address.cityName(), //
          position: 'Newbie',
          cloudinary_id: null,
          createdAt: new Date(),
          updatedAt: new Date()
        }
        usersList.push(user)
      })
      return usersList
    }
    return await queryInterface.bulkInsert('users', randomUsersList(10));
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
