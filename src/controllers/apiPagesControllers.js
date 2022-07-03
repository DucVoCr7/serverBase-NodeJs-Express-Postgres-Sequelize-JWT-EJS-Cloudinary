import apiPagesServices from '../services/apiPagesServices'

const postsGroupPage = async (req, res) => {
    const data = await apiPagesServices.postsGroupPage(req.query.category)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}
const homePage = async (req, res) => {
    const data = await apiPagesServices.homePage()
    return res.status(200).json(data)
}
const userPage = async (req, res) => {
    const data = await apiPagesServices.userPage(req.params.id)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}
const homeUserPage = async (req, res)=> {
    const data = await apiPagesServices.homeUserPage(req.params.id, req.userIdToken)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}
module.exports = {
    postsGroupPage: postsGroupPage,
    homePage: homePage,
    userPage: userPage,
    homeUserPage: homeUserPage
}