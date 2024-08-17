'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) 
  {
    await queryInterface.createTable('Maquinas', 
      {
      id: 
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome: 
      {
        type: Sequelize.STRING,
        allowNull: false
      },
      marca: 
      {
        type: Sequelize.STRING,
        allowNull: false
      },
      modelo: 
      {
        type: Sequelize.STRING,
        allowNull: false
      },
      clienteId: 
      {
        type: Sequelize.INTEGER,
        references: 
        {
          model: 'Clientes', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      createdAt: 
      {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) =>
  {
    return queryInterface.dropTable('Maquinas');
  }
};
