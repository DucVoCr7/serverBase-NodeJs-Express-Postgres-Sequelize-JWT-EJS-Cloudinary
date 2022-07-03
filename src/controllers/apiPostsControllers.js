import apiPostsServices from '../services/apiPostsServices'

const readPostsOfUser = async (req, res) => {
    const data = await apiPostsServices.readPostsOfUser(req.query.userId)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}
const createPost = async (req, res) => {
    const data = await apiPostsServices.createPost(req.body, req.userIdToken, req.files.image.filepath)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}
const readPost = async (req, res) => {
    const data = await apiPostsServices.readPost(req.params.id)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}
const updatePost = async (req, res) => {
    const data = await apiPostsServices.updatePost(req.params.id, req.body, req.userIdToken, req.files.image?.filepath)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}
const deletePost = async (req, res) => {
    const data = await apiPostsServices.deletePost(req.params.id, req.userIdToken)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}
module.exports = {
    readPostsOfUser: readPostsOfUser,
    createPost: createPost,
    readPost: readPost,
    updatePost: updatePost,
    deletePost: deletePost
}