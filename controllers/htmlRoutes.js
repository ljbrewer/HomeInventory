const router = require('express').Router();
const { Asset, Home, User, State, Category, Location } = require('../models');
const { withAuth } = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in,
      userEmail: user.email,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/profile', withAuth, (req, res) => {
  res.render('profile', {
    logged_in: req.session.logged_in,
    userEmail: user.email,
  })
})

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/myhomes', withAuth, async (req, res) => {
  try {

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Home, as: 'homes' }],
    });

    const user = userData.get({ plain: true });

    res.render('myhomes', {
      homes: user.homes,
      logged_in: req.session.logged_in,
      userEmail: user.email,
    });

  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/myhomes/:id/', withAuth, async (req, res) => {
  try {

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Home, as: 'homes', include: [{ model: Asset, as: 'assets' }] }],
    });

    const user = userData.get({ plain: true });

    res.render('assets', {
      homeAssets: user.homes.assets,
      logged_in: req.session.logged_in,
      userEmail: user.email,
    })

  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/assets', withAuth, async (req, res) => {
  try {

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Home, as: 'homes', include: [{ model: Asset, as: 'assets', include: [{ model: Location, as: 'location' }, { model: Category, as: 'category' }, { model: State, as: 'status' }] }] }],
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
      assets,
      logged_in: req.session.logged_in,
      userEmail: user.email,
    });

  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  };

});

module.exports = router;