import express from 'express'
import { getAllQuizesMetadata, getQuizById } from '../controllers/quizes'


export default (router: express.Router) => {
    router.get('/quizes', getAllQuizesMetadata)
    router.get('/quizes/:id',getQuizById)
}