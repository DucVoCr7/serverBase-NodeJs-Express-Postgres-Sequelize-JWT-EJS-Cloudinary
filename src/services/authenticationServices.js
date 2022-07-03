import bcrypt from "bcryptjs"
import db from '../models/index'
import { createAccessToken, createRefreshToken, saveRefreshToken } from '../utils/JWTAction'
const cloudinary = require('../utils/cloudinary')

const handleDataInput = (actionReq, dataReq) => {

    const errors = {}
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if (actionReq === 'register') {
        if (!dataReq.name?.trim()) {
            errors.name = 'Enter your name!'
        }
    }

    if (!dataReq.email?.trim()) {
        errors.email = 'Enter your email!'
    } else if (!regex.test(dataReq.email)) {
        errors.email = 'Enter a valid email!'
    }

    if (!dataReq.password?.trim()) {
        errors.password = 'Enter your password!'
    } else if (dataReq.password.length < 6) {
        errors.password = 'Enter at least 6 characters!'
    }

    return errors
}

const hashPassword = (password) => {
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    return hashPassword
}

const login = async (data) => {
    try {
        // Xử lí dữ liệu Input
        const errors = handleDataInput('login', data)
        if (Object.keys(errors).length !== 0) {
            return {
                errCode: 400,
                errors
            }
        }
        // Xử lí dữ liệu khi đầy đủ input
        const user = await db.users.findOne({
            where: { email: data.email },
            raw: true // Để chỉ nhận value, không nhận mấy cái linh tinh vào biến user
        })
        if (!user) {
            return {
                errCode: 401,
                errors: {
                    email: 'Email is not registered!'
                }
            }
        }
        // Check password
        const checkPassword = bcrypt.compareSync(data.password, user.password);
        if (!checkPassword) {
            return {
                errCode: 401,
                errors: {
                    password: 'Password incorrect!'
                }
            }
        }
        delete user.password
        const accessToken = createAccessToken(user.id)
        const refreshToken = createRefreshToken(user.id)
        await saveRefreshToken(user.id, refreshToken)
        return { user, accessToken, refreshToken }
    } catch (error) {
        return error
    }
}

const register = async (data) => {
    try {
        // Xử lí dữ liệu Input
        const errors = handleDataInput('register', data)
        if (Object.keys(errors).length !== 0) {
            return {
                errCode: 400,
                errors
            }
        }
        // Xử lí dữ liệu khi đầy đủ input
        const checkEmail = await db.users.findOne({
            where: { email: data.email }
        })
        if (checkEmail) {
            return {
                errCode: 401,
                errors: {
                    email: 'Email already exists!'
                }
            }
        }
        // Tạo user mới
        const user = (await db.users.create({
            name: data.name,
            email: data.email,
            password: hashPassword(data.password)
        })).get({ plain: true }) // Tương tự set raw: true để delete password
        delete user.password
        const accessToken = createAccessToken(user.id)
        const refreshToken = createRefreshToken(user.id)
        await saveRefreshToken(user.id, refreshToken)
        return {
            user,
            accessToken,
            refreshToken
        }
    } catch (error) {
        return (error)
    }
}

module.exports = {
    login: login,
    register: register
}