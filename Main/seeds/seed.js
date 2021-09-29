const sequelize = require('../config/connection');
const { Asset, Home, User, Location, Category, State } = require('../models');

const ownerData = require('./ownerData.json');
const homeData = require('./homeData.json');
const assetData = require('./assetData.json');
const locationData = require('./locationData.json');
const categoryData = require('./categoryData.json');
const stateData = require('./stateData.json');

const seedDatabase = async () => {
  try {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(ownerData, {
    individualHooks: true,
    returning: true,
  });

  const home = await Home.bulkCreate(homeData, {
    individualHooks: true,
    returning: true,
  });

  const location = await Location.bulkCreate(locationData, {
    individualHooks: true,
    returning: true,
  });

  const category = await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });

  const state = await State.bulkCreate(stateData, {
    individualHooks: true,
    returning: true,
  });

  const asset = await Asset.bulkCreate(assetData, {
    individualHooks: true,
    returning: true,
  });
  } catch (err){
    console.log (err)
  }

  process.exit(0);
};

seedDatabase();
