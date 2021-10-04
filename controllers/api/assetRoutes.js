const router = require('express').Router();
const { Asset } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
        const assetData = await Asset.findByPk(req.params.id);

        if (!assetData) {
            res.status(404).json({ message: 'No asset with this id!' });
            return;
        }

        res.status(200).json(assetData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const assetData = await Asset.create({...req.body, owner_id: req.session.user_id});

        res.status(200).json(assetData);

    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const assetData = await Asset.update({
            where: {
                id: req.params.id
            }
        });

        if (!assetData) {
            res.status(404).json({ message: 'No asset found with this id!' });
            return;
        }
        res.status(200).json(assetData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const assetData = await Asset.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!assetData) {
            res.status(404).json({ message: 'No asset found with this id!' });
            return;
        }

        res.status(200).json(assetData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;