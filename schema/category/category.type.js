const gql = require('graphql-tag')
const typeDefs = gql `
    type Category {
        id: Int!
        name: String
        isActive: Boolean
        createAt: String
        updateAt: String
    }
    type Query {
        getAllCategory: [Category]
    }   
    
    type Mutation {
        insertCategory(input: CategoryMutation): Boolean
        deleteById(input:CategoryMutation): Boolean
        updateById(input:CategoryMutation): Boolean
    }
    input CategoryMutation {
        id: Int
        name: String
    }
`

module.exports = typeDefs