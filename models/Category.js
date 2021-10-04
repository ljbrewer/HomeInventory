const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model { };


Category.init(
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
        modelName: 'category',
    }
);
    
module.exports = Category;  
