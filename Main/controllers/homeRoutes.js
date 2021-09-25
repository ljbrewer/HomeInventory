// / -homepage
// /login
// /homes -list of homes
// /homes/:id -information about a certain home
// /assets -report
// /homes/:id/assets -report
// /homes/:id/assets/:id -information about a certain asset within a certain home

const router = require('express').Router();
const { Asset, Home, User } = require('../models');
// const withAuth = require('../utils/auth');

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

module.exports = router;