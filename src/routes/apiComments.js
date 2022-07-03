import express from "express";
import apiCommentsControllers from '../controllers/apiCommentsControllers'
import verifyToken from "../middlewares/verifyToken";

const router = express.Router()

const initAPICommentsRoutes = (app)=> {
    router.get('/', apiCommentsControllers.readCommentsOfPost)
    router.post('/', verifyToken, apiCommentsControllers.createComment)
    router.patch('/:id', verifyToken, apiCommentsControllers.updateComment)
    router.delete('/:id', verifyToken, apiCommentsControllers.deleteComment)
    return app.use ('/api/comments', router)
}

export default initAPICommentsRoutes;
