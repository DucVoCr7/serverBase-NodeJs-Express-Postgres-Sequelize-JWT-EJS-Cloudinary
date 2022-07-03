import express from "express";
import apiMusicsControllers from '../controllers/apiMusicsControllers'
import verifyToken from "../middlewares/verifyToken";
const router = express.Router()

const initAPIMusicsRoutes = (app)=> {
    router.get('/:userId', apiMusicsControllers.readMusicsOfUser)
    router.post('/', verifyToken, apiMusicsControllers.createMusic)
    router.delete('/:id', verifyToken, apiMusicsControllers.deleteMusic)
    return app.use ('/api/musics', router)
}

export default initAPIMusicsRoutes;
