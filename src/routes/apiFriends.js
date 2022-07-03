import express from "express";
import apiFriendsControllers from '../controllers/apiFriendsControllers'
import verifyToken from "../middlewares/verifyToken";
const router = express.Router()

const initAPIFriendsRoutes = (app)=> {
    router.get('/', apiFriendsControllers.readFriendsOfUser)
    router.post('/', verifyToken, apiFriendsControllers.requestFriend)
    router.patch('/:id', verifyToken, apiFriendsControllers.acceptFriend)
    router.delete('/refuseFriend/:id', verifyToken, apiFriendsControllers.refuseFriend)
    router.delete('/deleteFriend/:id', verifyToken, apiFriendsControllers.deleteFriend)
    return app.use ('/api/friends', router)
}

export default initAPIFriendsRoutes;
