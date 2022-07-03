import db from '../models/index'
const cloudinary = require('../utils/cloudinary')

const readPostsOfUser = async (userId) => {
    try {
        const user = await db.users.findOne({
            where: {id: userId}
        })
        if(!user) {
            return {
                errCode: 400,
                errors: {
                    message: 'User does not exist!'
                }
            }
        }
        const dataPostsOfUser = await db.posts.findAll({
            where: {userId: userId},
            order: [
                ['id', 'DESC']
            ]
        })
        return {
            dataPostsOfUser
        }
    } catch (error) { return (error) }
}
const createPost = async (data, userIdToken, path) => {
    try {
        if (data.userId != userIdToken) {
            return {
                errCode: 403,
                errors: {
                    message: 'Request not processed!'
                }
            }
        }
        const resultImage = await cloudinary.uploader.upload(path);
        const newPost = await db.posts.create({
            ...data,
            likesNumber: 0,
            image: resultImage.secure_url,
            cloudinary_id: resultImage.public_id
        })
        return {
            message: 'Create post success!',
            post: newPost
        }
    } catch (error) { return (error) }
}
const readPost = async (id) => {
    try {
        const post = await db.posts.findOne({
            where: { id: id },
            include: [
                { model: db.users, attributes: ['name'] },
                {
                    model: db.comments,
                    attributes: { exclude: ['postsId'] },
                    include: [
                        {
                            model: db.users,
                            attributes: ['name', 'image']
                        },
                        {
                            model: db.replies,
                            attributes: { exclude: ['commentId'] },
                            include: [
                                {
                                    model: db.users, 
                                    attributes: ['name', 'image']
                                }
                            ]
                        }
                    ]
                }
            ],
            order: [
                [db.comments, db.replies , 'id', 'DESC']
            ]
        })
        if (!post) {
            return {
                errCode: 400,
                errors: {
                    message: 'Post does not exist!'
                }
            }
        }
        return {
            post
        }
    } catch (error) { return (error) }
}
const updatePost = async (id, data, userIdToken, path) => {
    try {
        const post = await db.posts.findOne({
            where: { id: id }
        })
        if (!post) {
            return {
                errCode: 400,
                errors: {
                    message: 'Post does not exist!'
                }
            }
        }
        if (post.userId !== userIdToken) {
            return {
                errCode: 403,
                errors: {
                    message: 'Request not processed!'
                }
            }
        }
        // Co path thi xoa image cu. Gan image new vao
        if (path) {
            await cloudinary.uploader.destroy(post.cloudinary_id)
            const resultImage = await cloudinary.uploader.upload(path);
            data.image = resultImage.secure_url
            data.cloudinary_id = resultImage.public_id
        }
        const newPost = await post.update({ ...data })
        return {
            message: 'Update post success!',
            post: newPost
        }
    } catch (error) { return (error) }
}

const deletePost = async (id, userIdToken) => {
    try {
        const post = await db.posts.findOne({
            where: { id: id },
            include: [{model: db.comments, attributes: ['id']}]
        })
        if (!post) {
            return {
                errCode: 400,
                errors: {
                    message: 'Post does not exist!'
                }
            }
        }
        if (post.userId !== userIdToken) {
            return {
                errCode: 403,
                errors: {
                    message: 'Request not processed!'
                }
            }
        }

        // Delete Replies Comments
        post.comments.forEach(async (comment)=> 
            await db.replies.destroy({where: {commentId: comment.id}})
        )
        // Delete Comments 
        await db.comments.destroy({where:{postId: post.id}})
        // Delete Likes
        await db.likes.destroy({where:{postId: post.id}})
        // Delete image on cloudiany
        if (post.cloudinary_id) {
            await cloudinary.uploader.destroy(post.cloudinary_id)
        }
        // await cloudinary.uploader.destroy(post.cloudinary_id)
        // Delete post
        await post.destroy();

        return {
            message: 'Delete post success!'
        }
    } catch (error) { return (error) }
}

module.exports = {
    readPostsOfUser: readPostsOfUser,
    createPost: createPost,
    readPost: readPost,
    updatePost: updatePost,
    deletePost: deletePost
}