import apiPhotosServices from '../services/apiPhotosServices'
const readPhotosOfUser = async (req, res) => {
    const data = await apiPhotosServices.readPhotosOfUser(req.query.userId)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}
const createPhoto = async (req, res) => {
    const data = await apiPhotosServices.createPhoto(req.body, req.userIdToken, req.files.photo.filepath)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}
const deletePhoto = async (req, res) => {
    const data = await apiPhotosServices.deletePhoto(req.params.id, req.userIdToken)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}
module.exports = {
    readPhotosOfUser: readPhotosOfUser,
    createPhoto: createPhoto,
    deletePhoto: deletePhoto
}