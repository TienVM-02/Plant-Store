const bcrypt = require('bcryptjs')
const {sequelize} = require('../config/db_connect')
const initmodels = require('../models/init-models')
var models = initmodels(sequelize)
const {decodeToken, generateToken} = require('../helper/jwt.helper')

const checkExist = async (info) => {
    try {
        const isExist = await models.accounts.findOne({
            where: {
                userName: info.userName
            }
        })
        if (isExist != null) {
            return true            
        } else {
            return false
        }
    } catch (error) {
        return false
    }
}

const signUp = async (info) => {
    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(info.password, salt)
    
    try {
        if (info.roleId === 0 ) {
            await models.accounts.create(
                {
                   userName: info.userName,
                   password: hashPassword, 
                }
            )
        } else {
            await models.accounts.create(
                {
                    userName: info.userName,
                    password: hashPassword,
                    roleId: info.roleId
                }
            )
        }
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

const signIn = async (info) => {
    const user = await models.accounts.findOne({
        where: {
            userName: info.userName
        }
    })
    if (user != null) {
        const isSuccess = bcrypt.compareSync(info.password, user.password)
        if (isSuccess) {
            const accessToken = generateToken(user)
            return {message: 'Success!', status_code: 200, success: true, accessToken}
        } else {
            return {message: 'Password wrong!', status_code: 200, success: false}
        }
    } else {
        return {message: 'Account not exist!', status_code: 200, success: false}
    }
}

const checkAuthen = (token, next) => {
    console.log(token)
    const decode = decodeToken(token)
    // console.log(decode)
    if (decode != null) {
        return decode.data
    } else {
        return {message: 'Decode Fail!', status_code: 200, success: false}
    }
}

module.exports = {
    signUp, 
    signIn,
    checkExist,
    checkAuthen
}