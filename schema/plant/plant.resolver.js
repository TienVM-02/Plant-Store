const {
    getAllPlant, insertPlant, deletePlant, updatePlant
} = require('../../repository/plant.repository')

var updateAt = new Date(Date.now()).toLocaleString();

const resolver = {
    Query: {
        getAllPlant: () => {
            return getAllPlant()
        }
    },

    Mutation: {
        insertPlant: (parent, {input}, context, info) => {
            console.log(input)
            return insertPlant(input)
        },

        deletePlant: (parent, {input}, context, info) => {
            return deletePlant(input.id, updateAt)
        },

        updatePlant: (parent, {input}, context, info) => {
            return updatePlant(input, updateAt)
        }

        // updatePlant: (parent, {input}, context, info) => {
        //     return updatePlant(input, updateAt)
        // }
        
    }
}
module.exports = resolver