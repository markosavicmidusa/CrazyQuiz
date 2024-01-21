import express from 'express';
import quizes from './quizes';


// #region Setup
const router = express.Router();
// #endregion Setup


const getRouter = ():express.Router => {
    console.log('router is created')
    quizes(router)
    return router
}

export default getRouter