const {sequelize} = require('../config/db_connect')
const initmodels = require('../models/init-models')
const {QueryTypes} = require('sequelize')
var models = initmodels(sequelize)

const getAllPlant = async () => {
    try {
        // return await models.plants.findAll({
        //     where: {
        //         isActive: true
        //     }
        // })
        // return await sequelize.query(
        //     "SELECT name, description, img FROM plants p INNER JOIN images i ON p.id = i.plantId WHERE isActive = true", 
        //     {type: QueryTypes.SELECT}
        // )

        return await models.images.findAll()
    } catch (error) {
        return null      
    }
}

const insertPlant = async(plant) => {
    // console.log("------------------")
    // console.log(plant)
    try {
        await models.plants.create({
            name: plant.name,
            description: plant.description,
            categoryId: plant.categoryId,
        })
        return true
    } catch (error) {
        return false
    }
}

const deletePlant = async(id, updateAt) => {
    try {
        await models.plants.update({isActive: false, updateAt:updateAt}, {
            where: {
                id
            }
        })
        return true
    } catch (error) {
        return false
    }
}

const updatePlant = async(plant, updateAt) => {
    try {
        await models.plants.update({name: plant.name, description: plant.description, categoryId: plant.categoryId, updateAt}, {
            where: {
                id: plant.id
            }
        })
        return true
    } catch (error) {
        return false
    }
}

module.exports = {
    getAllPlant,
    insertPlant,
    deletePlant,
    updatePlant
}