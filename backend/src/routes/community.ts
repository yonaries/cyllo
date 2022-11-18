import { Router } from "express";
import { client, docsCollection } from "../database/database-config";

const router = Router();

router.get('/', async (req, res) => {
    // const user: IUser = req.body.user

    try {
        await client.connect();

        const result = await docsCollection.find({
            $or: [{ 'permittedTo.anyOneWithLink': true }, { 'permittedTo.group': req.query.uid }]
        }, {
            projection: {
                permittedTo: 0
            }
        }).toArray();

        await client.close();
        return res.status(200).send(result)

    } catch (error) {
        return res.status(400).send(error)
    }
})

//third-party integrations
router.get('/', async (req, res) => {

    try {
        await client.connect();

        const result = await docsCollection.find({
            $or: [{ 'permittedTo.anyOneWithLink': true }, { 'permittedTo.group': req.query.uid }]
        }, {
            projection: {
                permittedTo: 0
            }
        }).toArray();

        await client.close();
        return res.status(200).send(result)

    } catch (error) {
        return res.status(400).send(error)
    }
})

export { router as CommunityRouter }