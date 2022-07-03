import express from "express";
import apiUsersControllers from '../controllers/apiUsersControllers'
import uploadFile from "../middlewares/uploadFile";
import verifyToken from "../middlewares/verifyToken";

const router = express.Router()

const initAPIUsersRoutes = (app)=> {
    router.get('/', verifyToken, apiUsersControllers.readAllUser)
    router.patch('/:id', verifyToken, uploadFile, apiUsersControllers.updateUser)
    router.delete('/:id', verifyToken, apiUsersControllers.deleteUser)
    return app.use ('/api/users', router)
}

export default initAPIUsersRoutes;
