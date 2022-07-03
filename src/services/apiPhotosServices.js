import db from '../models/index'
const cloudinary = require('../utils/cloudinary')

const readPhotosOfUser = async (userId) => {
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
        const dataPhotosOfUser = await db.photos.findAll({
            where: {userId: userId},
            order: [
                ['id', 'DESC']
            ]
        })
        return {
            dataPhotosOfUser
        }
    } catch (error) { return (error) }
}
const createPhoto = async (data, userIdToken, path) => {
    try {
        if (data.userId != userIdToken) {
            return {
                errCode: 403,
                errors: {
                    message: 'Request not processed!'
                }
            }
        }
        const resultPhoto = await cloudinary.uploader.upload(path)
        const newPhoto = await db.photos.create({
            ...data,
            photo: resultPhoto.secure_url,
            cloudinary_id: resultPhoto.public_id
        })
        return {
            message: 'Add photo success!',
            photo: newPhoto
        }
    } catch (error) { return (error) }
}

const deletePhoto = async (id, userIdToken) => {
    try {
        const photo = await db.photos.findOne({
            where: { id: id },
        })
        if (!photo) {
            return {
                errCode: 400,
                errors: {
                    message: 'Photo does not exist!'
                }
            }
        }
        if (photo.userId !== userIdToken) {
            return {
                errCode: 403,
                errors: {
                    message: 'Request not processed!'
                }
            }
        }
        if (photo.cloudinary_id) {
            await cloudinary.uploader.destroy(photo.cloudinary_id)
        }
        // await cloudinary.uploader.destroy(photo.cloudinary_id)
        await photo.destroy();
        
        return {
            message: 'Delete photo success!'
        }
    } catch (error) { return (error) }
}

module.exports = {
    readPhotosOfUser: readPhotosOfUser,
    createPhoto: createPhoto,
    deletePhoto: deletePhoto
}