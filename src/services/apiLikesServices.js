import db from '../models/index'

const readLikesOfPost = async (postId) => {
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
        const dataLikesOfPost = await db.Likes.findAll({
            where: {postId: postId},
            include: [
                {
                    model: db.users,
                    attributes: ['id', 'name', 'image']
                }
            ],
            order: [
                ['id', 'DESC']
            ]
        })
        return {
            dataLikesOfPost
        }
    } catch (error) { return (error) }
}
const actionLike = async (data, userIdToken) => {
    try {
        if (data.userId != userIdToken) {
            return {
                errCode: 403,
                errors: {
                    message: 'Request not processed!'
                }
            }
        }
        // Check xem đã like chưa
        const like = await db.likes.findOne({
            where: {
                postId: data.postId,
                userId: data.userId
            }
        })
        // Nếu đã like
        if(like) {
            // Xóa like
            await like.destroy();
            // Cập nhật like trong post
            const post = await db.posts.findOne({
                where: {id: data.postId}
            })
            await post.update({
                ...post,
                likesNumber: post.likesNumber - 1
            })
            return {
                message: 'Likes removed!'
            } 
        }
        // Nếu chưa like
        // Tạo like
        await db.likes.create({
            ...data,
        })
        // Cập nhật like trong post
        const post = await db.posts.findOne({
            where: {id: data.postId}
        })
        await post.update({
            ...post,
            likesNumber: post.likesNumber + 1
        })
        return {
            message: 'Liked!'
        }
    } catch (error) { return (error) }
}

module.exports = {
    readLikesOfPost: readLikesOfPost,
    actionLike: actionLike
}