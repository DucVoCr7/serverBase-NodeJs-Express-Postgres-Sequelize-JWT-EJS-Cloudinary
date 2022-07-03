import webServices from "../services/webServices";

const helloServer = async (req, res) => {
    const data = await webServices.helloServer()
    return res.render('web.ejs', {data: data})
}
// Hàm truyền vào routes
// const getCRUD = async (req, res) => {
//     const data = await webServices.getAllUsers()
//     return res.render('web.ejs', {users: data})
// }

// const postCRUD = async (req, res)=> {
//     await webServices.createUser(req.body)
//     return res.redirect('/')
// }

// const getInfoUserCRUD = async (req, res)=> {
//     if (req.query.id) {
//         const dataUser = await webServices.getInfoUserById(req.query.id)
//         return res.render('updateUser.ejs', {dataUser: dataUser})
//     } else {
//         return res.send('User not found!')
//     }
// }

// const putCRUD = async (req, res)=> {
//     await webServices.updateUser(req.body)
//     return res.redirect('/')
// }
// const deleteCRUD = async (req, res)=> {
//     if (req.query.id) {
//         await webServices.deleteUser(req.query.id)
//         return res.redirect('/')
//     } else {
//         return res.send('User not found1')
//     }
// }

module.exports = {
    helloServer: helloServer,
    // getCRUD: getCRUD,
    // postCRUD: postCRUD,
    // getInfoUserCRUD: getInfoUserCRUD,
    // putCRUD: putCRUD,
    // deleteCRUD: deleteCRUD,
}