import express from 'express';


// #region Setup
const router = express.Router();
// #endregion Setup


const getRouter = ():express.Router => {
    console.log('router is created')
    return router
}

export default getRouter