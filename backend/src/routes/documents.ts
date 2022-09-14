import { Router } from 'express';
import * as middleware from '../middleware/middleware';
import { IDocument, Visibility } from '../model/files';
import { client, folderCollection, docsCollection } from './../database/database-config';
import { generateId } from './../services/generateId';

const router = Router();

router.post('/create', middleware.decodeToken, async (req, res) => {
    await client.connect();
    try {
        const document = {
            _id: generateId('document'),
            name: req.body.name,
            desc: req.body.desc,
            owner: req.body.user._id,
            visibility: 'private',
            permittedTo: {
                anyOneWithLink: false,
                group: []
            },
            _collectionId: req.body.collId,
            docData: req.body.docJson,
            progLang: req.body.tech
        }
        await docsCollection.insertOne(document)
        await client.close();

        return res.status(200).send(document)
    } catch (error) {
        console.log(error);

        return res.status(400).send(error)
    }
})

router.get('/:id', middleware.decodeToken, async (req, res) => {
    try {
        await client.connect();
        const result = await docsCollection.find({
            owner: req.body.user._id,
            _collectionId: req.params.id
        }).toArray();
        await client.close();

        return res.status(200).send(result)
    } catch (error) {
        return res.status(400).send(error)
    }
})

export { router as documentRouter }