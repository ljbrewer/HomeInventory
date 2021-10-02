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


Asset.belongsTo(Location, {
    foreignKey: 'location_id',
    onDelete: 'Set Null'
});

Location.hasMany(Asset, {
    foreignKey: 'location_id'
});

Asset.hasMany(Category, {
    foreignKey: 'category_id',
    onDelete: 'Set Null'
});

Category.belongsTo(Asset, {
    foreignKey: 'category_id'
});

State.hasMany(Asset, {
    foreignKey: 'state_id',
    onDelete: 'Set Null'
});

Asset.belongsTo(State, {
    foreignKey: 'state_id',
    as: 'status'
});

module.exports = { User, Home, Asset, Location, Category, State };