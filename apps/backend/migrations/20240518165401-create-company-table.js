'use strict';

const { POSTGRES_CURRENT_TIMESTAMP} = require('./constants/common.constants');
const {DataTypes} = require('sequelize');

const tableName = 'Compnay';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   *
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   */
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.sequelize.transaction(async transaction => {
      await queryInterface
      .createTable(
        tableName,
        {

          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          email: {
            type: DataTypes.STRING,
            unique: true,
          },
          website: {
            type: DataTypes.STRING,
            unique: true,
          },
          name: {
            type: DataTypes.STRING,
          },
          address: {
            type: DataTypes.STRING,
          },
          city: {
            type: DataTypes.STRING,
          },
          country: {
            type: DataTypes.STRING,
          },
          phone: {
            type: DataTypes.STRING,
          },
          postalCode: {
            type: DataTypes.STRING,
          },
          updatedAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal(POSTGRES_CURRENT_TIMESTAMP),
          },
          deletedAt: {
            type: DataTypes.DATE,
          },
          createdAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal(POSTGRES_CURRENT_TIMESTAMP),
          },
        }
        ,
        { transaction })
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(tableName);
  }
};
