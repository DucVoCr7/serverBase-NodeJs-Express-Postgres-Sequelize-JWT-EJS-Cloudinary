import apiCommentsServices from '../services/apiCommentsServices'

const readCommentsOfPost = async (req, res) => {
    const data = await apiCommentsServices.readCommentsOfPost(req.query.postId)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}

const createComment = async (req, res) => {
    const data = await apiCommentsServices.createComment(req.body, req.userIdToken)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}

const updateComment = async (req, res)=> {
    const data = await apiCommentsServices.updateComment(req.params.id, req.body, req.userIdToken)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}

const deleteComment = async (req, res) => {
    const data = await apiCommentsServices.deleteComment(req.params.id, req.userIdToken)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}

module.exports = {
    readCommentsOfPost: readCommentsOfPost,
    createComment: createComment,
    updateComment: updateComment,
    deleteComment: deleteComment
}