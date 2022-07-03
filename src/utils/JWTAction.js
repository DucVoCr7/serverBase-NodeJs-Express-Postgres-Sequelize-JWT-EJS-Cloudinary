import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const createAccessToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_TIME_EXPIRE })
}

export const createRefreshToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET)
}

export const saveRefreshToken = async (userId, refreshToken) => {
    try {
        await db.refreshTokens.create({
            userId,
            refreshToken
        })
    } catch (error) { return (error) }
}