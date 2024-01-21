import express from 'express'
import { getAllQuizzesMetadataDb } from '../db/quzies_metadata'
import { getQuizByIdDb } from '../db/quizes'

// * GET all Metadata Quizes

export const getAllQuizesMetadata = async (req: express.Request, res: express.Response) => {

    try {
        const quizesMetadata = await getAllQuizzesMetadataDb()

        if(!quizesMetadata){
           return res.status(404).send('Not found')
        }

        return res.status(200).send(quizesMetadata)
    } catch (error) {
        return res.status(500).send(error)
    }
}

// * GET Quiz by id

export const getQuizById = async (req: express.Request, res: express.Response) => {
  
    try {
        let { id } = req.params
        if(!id){
            return res.status(400).send('Bad request')
        }

        const Quiz = await getQuizByIdDb(id)
        
        if(!Quiz){
            return res.status(400).send('Not found')
        }

        return res.status(200).send(Quiz)

    } catch (error) {
        return res.status(500).send(error)
    }
}