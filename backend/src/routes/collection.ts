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
            visibility: Visibility.private,
            permittedTo: {
                anyOneWithLink: false,
                group: []
            }
        }
        const result = await folderCollection.insertOne(collection)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(400).send('Request Failed!')
    }
})