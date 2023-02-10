const jwt = require('jsonwebtoken')

const generateToken = (payload) => {
    const accessToken = jwt.sign(
        {data: payload},
        process.env.SECRECT_KEY,
        {expiresIn: process.env.JWT_EXPIRED_TIME }
    )
    return accessToken
}

const decodeToken = (accessToken) => {
    try {
        const decode = jwt.verify(accessToken, process.env.SECRECT_KEY)
        return decode
    } catch (error) {
        return null
    }
}

module.exports = {
    generateToken,
    decodeToken
}