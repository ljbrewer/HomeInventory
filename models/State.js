const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class State extends Model { };

State.init(
    {
        id: {
            type: DataTypes.STRING,
            // allowNull: false,
            // primaryKey: true,
            // autoIncrement: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'state',
    }
);
    
module.exports = State;  
