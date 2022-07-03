import express from "express";
import apiLikesControllers from '../controllers/apiLikesControllers'
import verifyToken from "../middlewares/verifyToken";
const router = express.Router()

const initAPILikesRoutes = (app)=> {
    router.get('/', apiLikesControllers.readLikesOfPost)
    router.post('/', verifyToken, apiLikesControllers.actionLike)
    return app.use ('/api/likes', router)
}

export default initAPILikesRoutes;
