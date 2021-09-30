const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Home extends Model { };

Home.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        purchasedOn: {
            type: DataTypes.DATE,
        },
        address1: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        address2: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postalcode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        policyNumber: {
            type: DataTypes.STRING,
        },
        owner_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'home',
    }
);

module.exports = Home;