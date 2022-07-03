import express from "express";
import apiPostsControllers from '../controllers/apiPostsControllers'
import uploadFile from "../middlewares/uploadFile";
import verifyToken from "../middlewares/verifyToken";

const router = express.Router()

const initAPIPostsRoutes = (app)=> {
    router.get('/', apiPostsControllers.readPostsOfUser)
    router.post('/', verifyToken, uploadFile, apiPostsControllers.createPost)
    router.get('/:id', apiPostsControllers.readPost)
    router.patch('/:id', verifyToken, uploadFile, apiPostsControllers.updatePost)
    router.delete('/:id', verifyToken, apiPostsControllers.deletePost)
    return app.use ('/api/posts', router)
}

export default initAPIPostsRoutes;
