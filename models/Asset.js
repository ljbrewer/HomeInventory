const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Asset extends Model {};

Asset.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        item: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        purchasedOn: {
            type: DataTypes.DATE,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'state',
              key: 'id',
            },
        },
        price: {
            type: DataTypes.DECIMAL,
        },
        currentValue: {
            type: DataTypes.DECIMAL,
        },
        model: {
            type: DataTypes.STRING,
        },
        serialno: {
            type: DataTypes.STRING,
        },
        comments: {
            type: DataTypes.TEXT,
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'category',
              key: 'id',
            },
        },
        location_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'location',
              key: 'id',
            },

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
        modelName: 'asset',
    }
);

module.exports = Asset;