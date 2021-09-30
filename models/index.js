const User = require("./User");
const Home = require("./Home");
const Asset = require("./Asset");

User.hasMany(Home, {
    foreignKey: 'owner_id',
    onDelete: 'CASCADE'
});

Home.belongsTo(User, {
    foreignKey: 'owner_id'
});

Home.hasMany(Asset, {
    foreignKey: 'home_id',
    onDelete: 'CASCADE'
});

Asset.belongsTo(Home, {
    foreignKey: 'home_id'
});

module.exports = { User, Home, Asset };