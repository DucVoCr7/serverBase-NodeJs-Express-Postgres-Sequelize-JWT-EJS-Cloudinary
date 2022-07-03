import express from "express";
import apiRepliesControllers from '../controllers/apiRepliesControllers'
import verifyToken from "../middlewares/verifyToken";

const router = express.Router()

const initAPIRepliesRoutes = (app)=> {
    router.get('/', apiRepliesControllers.readRepliesOfComment)
    router.post('/', verifyToken, apiRepliesControllers.createReply)
    router.patch('/:id', verifyToken, apiRepliesControllers.updateReply)
    router.delete('/:id', verifyToken, apiRepliesControllers.deleteReply)
    return app.use ('/api/replies', router)
}

export default initAPIRepliesRoutes;
