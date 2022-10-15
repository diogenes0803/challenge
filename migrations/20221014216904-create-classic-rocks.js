'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ClassicRocks', {
      unique_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        unique: true,
        type: Sequelize.STRING
      },
      song_raw: {
        type: Sequelize.STRING
      },
      song_clean: {
        type: Sequelize.STRING
      },
      artist_raw: {
        type: Sequelize.STRING
      },
      artist_clean: {
        type: Sequelize.STRING
      },
      callsign: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.INTEGER
      },
      combined: {
        type: Sequelize.STRING
      },
      first: {
        type: Sequelize.BOOLEAN
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ClassicRocks');
  }
};