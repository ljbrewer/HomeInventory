const sequelize = require('../config/connection');
const {Asset,Home,User } = require('../models');

const ownerData = require('./ownerData.json');
const homeData = require('./homeData.json');
const assetData = require('./assetData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(ownerData, {
    individualHooks: true,
    returning: true,
  });

   const home = await Home.bulkCreate(homeData, {
    individualHooks: true,
    returning: true,git
  });

 const asset = await Asset.bulkCreate(assetData, {
    individualHooks: true,
    returning: true,
  });
  

  process.exit(0);
};

seedDatabase();
