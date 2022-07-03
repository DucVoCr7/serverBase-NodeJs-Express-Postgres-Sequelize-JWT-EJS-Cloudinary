import express from "express";
import authenticationControllers from '../controllers/authenticationControllers'
const router = express.Router()

const initAuthenticationRoutes = (app)=> {
    // router.get('/', Hàm từ controllers)
    router.post('/login', authenticationControllers.login)
    router.post('/register', authenticationControllers.register)
    return app.use ('/', router)
}

export default initAuthenticationRoutes;
