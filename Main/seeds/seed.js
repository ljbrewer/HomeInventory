const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userData = require('./ownerData.json');
const homeData = require('./homeData.json');
const assetData = require('./assetData.json');
const locationData = require('./locationData.json');
const stateData = require('./stateData.json');
const categoryData = require('./categoryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const owners = await Owner.bulkCreate(ownerData, {
    individualHooks: true,
    returning: true,
  });

  const category = await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });

  const location = await Location.bulkCreate(locationData, {
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
  

  process.exit(0);
};

seedDatabase();
