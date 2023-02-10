const {sequelize} = require('../config/db_connect')
const initmodels = require('../models/init-models')

var models = initmodels(sequelize)


const getAllCategory = async () => {
    return await models.categories.findAll({
        where: {
            isActive: true
        }
    })
}

const insertCategory = async (name) => {
    try {
        await models.categories.create({
            name: name
        })
        return true
    } catch (error) {
        console.log(error)
        return false        
    }
}

const deleteById = async (id, updateAt) => {
    try {
        await models.categories.update({isActive: false, updateAt},{
            where: {
                id
            }
        })
        return true
    } catch (error) {
        return false        
    }
}

const updateById = async (id, name, updateAt) => {
    try {
        await models.categories.update(
            {
                name,
                updateAt
            },
            {
                where: {
                    id
                }
            }
        )
        return true
    } catch (error) {
        return false        
    }
}

module.exports = {
    getAllCategory,
    insertCategory,
    deleteById,
    updateById
}