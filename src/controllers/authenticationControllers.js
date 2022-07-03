import authenticationServices from '../services/authenticationServices'

const login = async (req, res) => {
    const data = await authenticationServices.login(req.body)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}

const register = async (req, res) => {
    const data = await authenticationServices.register(req.body)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}

module.exports = {
    login: login,
    register: register
}
