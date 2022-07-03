import db from '../models/index'

const readCommentsOfPost = async (postId) => {
    try {
        const post = await db.posts.findOne({
            where: {id: postId}
        })
        if(!post) {
            return {
                errCode: 400,
                errors: {
                    message: 'Post does not exist!'
                }
            }
        }
        const dataCommentsOfPost = await db.comments.findAll({
            where: {postId: postId},
            include: [
                {
                    model: db.users,
                    attributes: ['id', 'name', 'image']
                },
                {
                    model: db.replies,
                    include: [
                        {
                            model: db.users,
                            attributes: ['id', 'name', 'image']
                        }
                    ]
                }
            ],
            order: [
                [db.replies, 'id', 'DESC']
            ]
        })
        return {
            dataCommentsOfPost
        }
    } catch (error) { return (error) }
}
const createComment = async (data, userIdToken) => {
    try {
        if (data.userId != userIdToken) {
            return {
                errCode: 403,
                errors: {
                    message: 'Request not processed!'
                }
            }
        }
        const newComment = await db.comments.create({
            ...data,
        })
        return {
            message: 'Comment success!',
            comment: newComment
        }
    } catch (error) { return (error) }
}
const updateComment = async (id, data, userIdToken) => {
    try {
        const comment = await db.comments.findOne({
            where: { id: id }
        })
        if (!comment) {
            return {
                errCode: 400,
                errors: {
                    message: 'Comment does not exist!'
                }
            }
        }
        if (comment.userId !== userIdToken) {
            return {
                errCode: 403,
                errors: {
                    message: 'Request not processed!'
                }
            }
        }
        const newComment = await comment.update({ ...data })
        return {
            message: 'Update comments success!',
            comment: newComment
        }
    } catch (error) { return (error) }
}
const deleteComment = async (id, userIdToken) => {
    try {
        const comment = await db.comments.findOne({
            where: { id: id }
        })
        if (!comment) {
            return {
                errCode: 400,
                errors: {
                    message: 'Comment does not exist!'
                }
            }
        }
        if (comment.userId !== userIdToken) {
            return {
                errCode: 403,
                errors: {
                    message: 'Request not processed!'
                }
            }
        }

        // Delete Replies
        await db.replies.destroy({where: {commentId: comment.id}})
        // Delete Comment
        await comment.destroy(); 

        return {
            message: 'Delete comment success!'
        }
    } catch (error) { return (error) }
}

module.exports = {
    readCommentsOfPost: readCommentsOfPost,
    createComment: createComment,
    updateComment: updateComment,
    deleteComment: deleteComment
}