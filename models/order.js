'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.hasMany(models.orderItem)
      order.belongsTo(models.user)
    }
  };
  order.init({
<<<<<<< HEAD
   
=======
    // userId: DataTypes.INTEGER
>>>>>>> 99235c64bbbb900b3e8564f9291ae399f6379e20
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};