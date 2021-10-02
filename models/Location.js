const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model { };

Location.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nameoflocation: {
            type: DataTypes.STRING,
            
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'location',
    }
);
    
module.exports = Location;  
