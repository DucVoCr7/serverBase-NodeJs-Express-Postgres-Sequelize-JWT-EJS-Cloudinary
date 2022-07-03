import apiUsersServices from '../services/apiUsersServices'

const readAllUser = async (req, res) => {
    const data = await apiUsersServices.readAllUser(req.userIdToken)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}
const updateUser = async (req, res) => {
    const data = await apiUsersServices.updateUser(req.params.id, req.body, req.userIdToken, req.files.image?.filepath)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}
const deleteUser = async (req, res) => {
    const data = await apiUsersServices.deleteUser(req.params.id, req.userIdToken)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}
module.exports = {
    readAllUser: readAllUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}