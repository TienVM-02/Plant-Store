const {
    getAllCategory,
    insertCategory,
    deleteById,
    updateById
} = require('../../repository/category.repository')

var updateAt = new Date(Date.now()).toLocaleString();

const resolver = {
    Query: {
        getAllCategory: () => {
            return getAllCategory()
        }
    },

    Mutation: {
        insertCategory: (parent, {input}, context, info) => {
            console.log(input)
            return insertCategory(input.name)
        },

        deleteById: (parent, {input}, context, info) => {
            return deleteById(input.id, updateAt)
        },

        updateById: (parent, {innput}, context, info) => {
            return updateById(innput.id, updateAt)
        }
    }
}

module.exports = resolver