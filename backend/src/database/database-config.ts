require('dotenv').config()
import { MongoClient } from 'mongodb'

export const client = new MongoClient(`${process.env.DB_HOST}`)
export const db = client.db(`${process.env.DB_NAME}`)
export const usersCollection = db.collection('users')
export const docsCollection = db.collection('documents')
export const folderCollection = db.collection('collections')