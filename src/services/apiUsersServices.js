import db from '../models/index'
const cloudinary = require('../utils/cloudinary')

const readAllUser = async (userIdToken) => {
    try {
        const admin = await db.users.findOne({
            where: {id: userIdToken}
        })
        if (!admin || admin.roleId !== 'R0') {
            return {
                errCode: 403,
                errors: {
                    message: 'Request not processed!'
                }
            }
        }
        const data = await db.users.findAll({
            attributes: {
                exclude: ['password'] //Khong tra ra password
            }
        });
        return {
            data
        }
    } catch (error) { return (error) }
}
const updateUser = async (id, data, userIdToken, path) => {
    try {
        const user = await db.users.findOne({
            where: { id: id }
        })
        if (!user) {
            return {
                errCode: 400,
                errors: {
                    message: 'User does not exist!'
                }
            }
        }
        if (user.id !== userIdToken || data.roleId) {
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
        const newUser = await user.update({ ...data })
        return {
            message: 'Update user success!',
            user: newUser
        }
    } catch (error) { return (error) }
}

const deleteUser = async (id, userIdToken) => {
    try {
        const user = await db.users.findOne({
            where: { id: id },
        })
        if (!user) {
            return {
                errCode: 400,
                errors: {
                    message: 'User does not exist!'
                }
            }
        }
        const admin = await db.users.findOne({
            where: {id: userIdToken}
        })
        if (!admin || admin.roleId !== 'R0') {
            return {
                errCode: 403,
                errors: {
                    message: 'Request not processed!'
                }
            }
        }

        // Chỗ này từ từ viết thêm
        // Delete refreshToken
        await db.refreshTokens.destroy({where:{userId: user.id}})
        // Delete likes
        await db.likes.destroy({where:{userId: user.id}})
        // Delete musics
        await db.musics.destroy({where:{userId: user.id}})
        // Delete comments
        await db.comments.destroy({where:{userId: user.id}})
        // Delete replies
        await db.replies.destroy({where:{userId: user.id}})
        // Delete photos
        await db.photos.destroy({where:{userId: user.id}})
        // Delete posts
        await db.posts.destroy({where: {userId: user.id}})
        // Delete image on cloudiany
        if (user.cloudinary_id) {
            await cloudinary.uploader.destroy(user.cloudinary_id)
        }
        // Delete user
        await user.destroy();

        return {
            message: 'Delete user success!',
        }
    } catch (error) { return (error) }
}

module.exports = {
    readAllUser: readAllUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}