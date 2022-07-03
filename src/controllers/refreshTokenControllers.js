import refreshTokenServices from '../services/refreshTokenServices'

const refreshToken = async (req, res) => {
    if (!req.body.refreshToken) {
        return res.status(401).json({ message: 'You are not authenticated!' })
    }
    const data = await refreshTokenServices.refreshToken(req.body.refreshToken)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}
const deleteRefreshToken = async (req, res)=> {
    if (!req.body.refreshToken) {
        return res.status(401).json({ message: 'You are not authenticated!' })
    }
    const data = await refreshTokenServices.deleteRefreshToken(req.body.refreshToken)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}
module.exports = {
    refreshToken: refreshToken,
    deleteRefreshToken: deleteRefreshToken
}