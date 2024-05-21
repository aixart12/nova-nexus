'use strict';

const { POSTGRES_CURRENT_TIMESTAMP} = require('./constants/common.constants');
const { UserRole} = require('./constants/user.constants');

const {DataTypes} = require('sequelize');

const tableName = 'User';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
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
        tableName,{
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          firstName: {
            type: DataTypes.STRING,
          },
          lastName: {
            type: DataTypes.STRING,
          },
          phoneNumber: {
            type: DataTypes.STRING,
          },
          email: {
            type: DataTypes.STRING,
            unique: true,
          },
          role: {
            type: DataTypes.ENUM('admin' , 'employee'),  // Adjust based on your UserRole values
            allowNull: false,
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
          companyId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'Company',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
    },
    {transaction})}
  );
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
