import express from "express";
import apiPhotosControllers from '../controllers/apiPhotosControllers'
import uploadFile from "../middlewares/uploadFile";
import verifyToken from "../middlewares/verifyToken";

const router = express.Router()

const initAPIPhotosRoutes = (app)=> {
    router.get('/', apiPhotosControllers.readPhotosOfUser)
    router.post('/', verifyToken, uploadFile, apiPhotosControllers.createPhoto)
    router.delete('/:id', verifyToken, apiPhotosControllers.deletePhoto)
    return app.use ('/api/photos', router)
}

export default initAPIPhotosRoutes;
