import { ICollection, Visibility } from './../model/files';
import { generateId } from './../services/generateId';
import { folderCollection } from './../database/database-config';
import { Router } from 'express';
import * as middleware from '../middleware/middleware';

const router = Router();

router.post('/create', middleware.decodeToken, async (req, res) => {

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
        return res.status(200).send(collection)
    } catch (error) {
        return res.status(400).send(error)
    }
})

router.get('/', middleware.decodeToken, async (req, res) => {
    try {
        const collections = folderCollection.find({ owner: req.body.user._id }).toArray()
        console.log(collections);

        return res.status(200).send(collections)
    } catch (error) {
        return res.status(400).send(error)
    }
})

export { router as collectionRouter };