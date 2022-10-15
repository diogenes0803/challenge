'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassicRock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ClassicRock.init({
    song_raw: DataTypes.STRING,
    song_clean: DataTypes.STRING,
    artist_raw: DataTypes.STRING,
    artist_clean: DataTypes.STRING,
    callsign: DataTypes.STRING,
    time: DataTypes.INTEGER,
    unique_id: { 
      type: DataTypes.STRING,
      primaryKey:true,
      autoIncrement: false
    },
    combined: DataTypes.STRING,
    first: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ClassicRock',
    timestamps: false
  });
  // ClassicRock.belongsTo(ArtistClean);
  // ClassicRock.belongsTo(SongClean);
  return ClassicRock;
};