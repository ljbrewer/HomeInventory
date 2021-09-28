const User = require("./User");
const Home = require("./Home");
const Asset = require("./Asset");
const Location = require("./Location");
const Category = require("./Category");
const State = require("./State");


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


Location.hasMany(Asset, {
    foreignKey: 'location_id',
    onDelete: 'Set Null'
});

Asset.belongsTo(Location, {
    foreignKey: 'location_id'
});

Category.hasMany(Asset, {
    foreignKey: 'location_id',
    onDelete: 'Set Null'
});

Asset.belongsTo(Category, {
    foreignKey: 'location_id'
});

State.hasMany(Asset, {
    foreignKey: 'location_id',
    onDelete: 'Set Null'
});

Asset.belongsTo(State, {
    foreignKey: 'location_id'
});

module.exports = { User, Home, Asset, Location, Category, State };