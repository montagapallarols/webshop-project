'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('categories', [{
     name: 'John Doe',
     createdAt: new Date(),
     updatedAt: new Date()
     }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('categories', null, {});
    
  }
};
