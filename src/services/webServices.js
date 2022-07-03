// import bcrypt from "bcryptjs"
// import db from '../models/index'

const helloServer = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = `Hi! This is Yahoo360's server.`
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}
// const hashPassword = (password) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const hashPassword = await bcrypt.hashSync(password, bcrypt.genSaltSync(10))
//             resolve(hashPassword)
//         } catch (error) {
//             reject(error)
//         }
//     })
// }
// const getAllUsers = () => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const data = await db.users.findAll({
//                 attributes: {
//                     exclude: ['password'] //Khong tra ra password
//                 }
//             });
//             resolve(data)
//         } catch (error) {
//             reject(error)
//         }
//     })
// }
// const createUser = (data) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const passwordHasHash = await hashPassword(data.password)
//             await db.users.create({
//                 ...data,
//                 password: passwordHasHash
//             })
//             resolve('Create new user success!')
//         } catch (error) {
//             reject(error)
//         }
//     })
// }

// const getInfoUserById = (id) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const dataUser = await db.users.findOne({
//                 where: { id: id },
//                 attributes: {
//                     exclude: ['password'] //Khong tra ra password
//                 }
//             })
//             if (dataUser) {
//                 resolve(dataUser)
//             } else {
//                 resolve('User not found!')
//             }
//         } catch (error) {
//             reject(error)
//         }
//     })
// }
// const updateUser = (data) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const dataUser = await db.users.findOne({
//                 where: { id: data.id }
//             })
//             if (dataUser) {
//                 dataUser.name = data.name,
//                     dataUser.email = data.email,
//                     dataUser.address = data.address,
//                     dataUser.phoneNumber = data.phoneNumber
//                 await dataUser.save();
//                 resolve('Update data user success!')
//             } else {
//                 resolve('User not found!')
//             }

//         } catch (error) {
//             reject(error)
//         }
//     })
// }
// const deleteUser = (id) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const dataUser = await db.users.findOne({
//                 where: { id: id }
//             })
//             if (dataUser) {
//                 await dataUser.destroy();
//                 resolve('Delete user success!')
//             } else {
//                 resolve('User not found!')
//             }
//         } catch (error) {
//             reject(error)
//         }
//     })
// }
module.exports = {
    helloServer: helloServer,
    // getAllUsers: getAllUsers,
    // createUser: createUser,
    // getInfoUserById: getInfoUserById,
    // updateUser: updateUser,
    // deleteUser: deleteUser,
}

