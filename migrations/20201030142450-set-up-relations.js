'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //  await queryInterface.addColumn('products', "categoryId",
    //  { type: Sequelize.INTEGER, 
    //   references: {
    //     model: "categories",
    //     key: "id",
    //   },
    //   onUpdate: "CASCADE",
    //   onDelete: "SET NULL",
    // });
    // await queryInterface.addColumn('products', "categoryId",
    //  { type: Sequelize.INTEGER, 
    //   references: {
    //     model: "categories",
    //     key: "id",
    //   },
    //   onUpdate: "CASCADE",
    //   onDelete: "SET NULL",
    // });
    
  },
  

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
