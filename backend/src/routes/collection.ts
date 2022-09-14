import { Router } from 'express';
import * as middleware from '../middleware/middleware';
import { client, folderCollection } from './../database/database-config';
import { generateId } from './../services/generateId';

const router = Router();

router.post('/create', middleware.decodeToken, async (req, res) => {
    await client.connect();
    try {
        const collection = {
            _id: generateId('collection'),
            name: req.body.name,
            owner: req.body.user._id,
            visibility: 'private',
            permittedTo: {
                anyOneWithLink: false,
                group: []
            }
        }
        await folderCollection.insertOne(collection)
        await client.close();

        return res.status(200).send(collection)
    } catch (error) {
        console.log(error);

        return res.status(400).send(error)
    }
})

router.get('/', middleware.decodeToken, async (req, res) => {
    try {
        await client.connect();
        const result = await folderCollection.find({ owner: req.body.user._id, }).toArray();
        await client.close();

        return res.status(200).send(result)
    } catch (error) {
        return res.status(400).send(error)
    }
})

router.put('/:id', middleware.decodeToken, async (req, res) => {
    try {
        await client.connect();
        const result = await folderCollection.findOneAndUpdate({ owner: req.body.user._id, _id: req.params.id }, { $set: { name: req.body.name } })
        await client.close();

        return res.status(200).send(result)
    } catch (error) {
        return res.status(400).send(error)
    }
})

router.delete('/:id', middleware.decodeToken, async (req, res) => {
    try {
        await client.connect();
        const result = await folderCollection.findOneAndDelete({ owner: req.body.user._id, _id: req.params.id })
        await client.close();

        console.log(result);
        return res.status(200).send(result)
    } catch (error) {
        console.log(error);
        return res.status(400).send(error)
    }
})

export { router as collectionRouter };
