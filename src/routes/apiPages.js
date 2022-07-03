import express from "express";
import apiPagesControllers from '../controllers/apiPagesControllers'
import verifyToken from "../middlewares/verifyToken";
const router = express.Router()

const initAPIPagesRoutes = (app)=> {
    router.get('/postsGroupPage', apiPagesControllers.postsGroupPage)
    router.get('/homePage', apiPagesControllers.homePage)
    router.get('/userPage/:id', apiPagesControllers.userPage)
    router.get('/homeUserPage/:id', verifyToken, apiPagesControllers.homeUserPage)
    return app.use ('/api', router)
}

export default initAPIPagesRoutes;
