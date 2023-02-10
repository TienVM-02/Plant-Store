const gql = require('graphql-tag')

const typeDefs = gql`
    type Plants {
        id: Int!
        # name: String
        # description: String
        # categoryId: Int
        img: String
        plantId: String
    }

    type Query {
        getAllPlant: [Plants]
    }

    type Mutation {
        insertPlant(input: PlantMutation): Boolean
        deletePlant(input: PlantMutation): Boolean
        updatePlant(input: PlantMutation): Boolean
    }

    input PlantMutation {
        id: Int
        name: String
        description: String
        categoryId: Int
    }
`
module.exports = typeDefs