import express from "express";
import webControllers from '../controllers/webControllers'
const router = express.Router()

const initWebRoutes = (app)=> {
    router.get('/', webControllers.helloServer)
    // router.get('/', webControllers.getCRUD)
    // router.post('/postCRUD', webControllers.postCRUD)
    // router.get('/getInfoUserCRUD', webControllers.getInfoUserCRUD)
    // router.post('/putCRUD', webControllers.putCRUD)
    // router.get('/deleteCRUD', webControllers.deleteCRUD)
    return app.use ('/', router)
}

export default initWebRoutes;
