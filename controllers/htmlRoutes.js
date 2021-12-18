const router = require('express').Router();
const { Asset, Home, User, State, Category, Location } = require('../models');
const { withAuth } = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    if (req.session.logged_in) {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Home, as: 'homes'}, { model: Asset, as: 'assets', include: [{ model: Location, as: 'location' }, { model: Category, as: 'category' }, { model: State, as: 'status' }] }],
      });

      const user = userData.get({ plain: true });

      res.render('homepage', {
        user,
        logged_in: req.session.logged_in,
      });
    } else {
      res.render('homepage', {
        logged_in: req.session.logged_in,
      });
    }

  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/profile', withAuth, async (req, res) => {
  try {

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Home, as: 'homes'}, { model: Asset, as: 'assets', include: [{ model: Location, as: 'location' }, { model: Category, as: 'category' }, { model: State, as: 'status' }] }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      user,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  };

});

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
      include: [{ model: Home, as: 'homes'}, { model: Asset, as: 'assets', include: [{ model: Location, as: 'location' }, { model: Category, as: 'category' }, { model: State, as: 'status' }] }],
    });

    const user = userData.get({ plain: true });

    res.render('myhomes', {
      user,
      homes: user.homes,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  };
});

// fix this 
router.get('/myhomes/:id/', withAuth, async (req, res) => {
  try {

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Home, as: 'homes'}, { model: Asset, as: 'assets', include: [{ model: Location, as: 'location' }, { model: Category, as: 'category' }, { model: State, as: 'status' }] }],
    });

    const user = userData.get({ plain: true });

    res.render('myhomes', {
      user,
      homes: user.homes,
      homeAssets: user.homes.assets,
      logged_in: req.session.logged_in,
    })

  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/assets', withAuth, async (req, res) => {
  try {
    console.log(req.body, "asset")
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Home, as: 'homes'}, { model: Asset, as: 'assets', include: [{ model: Location, as: 'location' }, { model: Category, as: 'category' }, { model: State, as: 'status' }] }],
    });

    const user = userData.get({ plain: true });

    // const userAssets = user.reduce((currentAssets, home) => {
    //   const nextCurrentAssets = [
    //     ...currentAssets,
    //     ...assets.map(asset => {
    //       return { ...asset, home: home.title }
    //     })
    //   ];
    //   return nextCurrentAssets;
    // }, []);

    res.render('assets', {
      user,
      homes: user.homes,
      assets: user.assets,
      logged_in: req.session.logged_in,
    });

    // res.render('assets', {
    //   assets,
    //   logged_in: req.session.logged_in,
    //   user
    // });

  } catch (err) {

    res.status(500).json(err);
  };

});

module.exports = router;