const router = require('express').Router();
const { Asset, Home, User, State, Category,Location } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/myhomes', async (req, res) => {
  try {

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Home, as: 'homes' }],
    });

    const user = userData.get({ plain: true });

    res.render('myhomes', {
      userHomes: user.homes,
    });

  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/myhomes/:id/', async (req, res) => {
  try {

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Home, as: 'homes', include: [{ model: Asset, as: 'assets' }] }],
    });

    const user = userData.get({ plain: true });

    res.render('homeassets', {
      homeAssets: user.homes.assets,
    })

  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/assets', async (req, res) => {
  try {

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Home, as: 'homes', include: [{ model: Asset, as: 'assets'}] }],
    });

    const user = userData.get({ plain: true });

    const assets = user.homes.reduce((currentAssets, home) => {
      const nextCurrentAssets = [
        ...currentAssets,
        ...home.assets.map(asset => {
          return { ...asset, home: home.title }
        })
      ];
      return nextCurrentAssets;
    }, []);

    res.render('assets', {
      assets
    });

  } catch (err) {
    res.status(500).json(err);
  };

});

module.exports = router;