const router = require('express').Router();
const { Home } = require('../../models');
const {withAuthApi} = require('../../utils/auth');

router.get('/:id', withAuthApi, async (req, res) => {
    try {
        const homeData = await Home.findByPk(req.params.id);

        if (!homeData) {
            res.status(404).json({ message: 'No home with this id!' });
            return;
        }

        res.status(200).json(homeData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuthApi, async (req, res) => {
    try {
        const homeData = await Home.create({...req.body, owner_id: req.session.user_id});

        res.status(200).json(homeData);

    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', withAuthApi, async (req, res) => {
    try {
        const homeData = await Home.update({
            where: {
                id: req.params.id
            }
        });

        if (!homeData) {
            res.status(404).json({ message: 'No home found with this id!' });
            return;
        }
        res.status(200).json(homeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuthApi, async (req, res) => {
    try {
        const homeData = await Home.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!homeData) {
            res.status(404).json({ message: 'No home found with this id!' });
            return;
        }

        res.status(200).json(homeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;