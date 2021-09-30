const router = require('express').Router();
const { Home } = require('../../models');

router.get('/:id', async (req, res) => {
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

router.post('/', async (req, res) => {
    try {
        const homeData = await Home.create(req.body);

        res.status(200).json(homeData);

    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
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