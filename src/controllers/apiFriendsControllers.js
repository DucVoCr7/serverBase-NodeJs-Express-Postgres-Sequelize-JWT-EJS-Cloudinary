import apiFriendsServices from '../services/apiFriendsServices'

const readFriendsOfUser = async (req, res) => {
    const data = await apiFriendsServices.readFriendsOfUser(req.query.userId)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}

const requestFriend = async (req, res) => {
    const data = await apiFriendsServices.requestFriend(req.body, req.userIdToken)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}

const acceptFriend = async (req, res)=> {
    const data = await apiFriendsServices.acceptFriend(req.params.id, req.body, req.userIdToken)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}

const refuseFriend = async (req, res) => {
    const data = await apiFriendsServices.refuseFriend(req.params.id, req.userIdToken)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}

const deleteFriend = async (req, res) => {
    const data = await apiFriendsServices.deleteFriend(req.params.id, req.userIdToken)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}
module.exports = {
    readFriendsOfUser: readFriendsOfUser,
    requestFriend: requestFriend,
    acceptFriend: acceptFriend,
    refuseFriend: refuseFriend,
    deleteFriend: deleteFriend
}