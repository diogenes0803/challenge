'use strict';
const fs = require("fs");
const { parse } = require("csv-parse");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const promise = () => new Promise((resolve, reject) => {
      const items = [];
      fs.createReadStream("./classic-rock-raw-data.csv")
        .pipe(parse({ delimiter: ",", from_line: 2 }))
        .on("data", function(row){
            items.push({
                song_raw: row[0],
                song_clean: row[1],
                artist_raw: row[2],
                artist_clean: row[3],
                callsign: row[4],
                time: row[5],
                unique_id: row[6],
                combined: row[7],
                first: row[8] == 1 ? true : false
            })
        })
        .on('end',function() {
          resolve(items)
        })
    })

    const items = await promise()
    return queryInterface.bulkInsert('ClassicRocks', items);
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
