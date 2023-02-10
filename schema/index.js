const {makeExecutableSchema} = require('graphql-tools')
const merge = require('lodash.merge')
const categorySchema = require('./category')
const authenticate = require('./authenticate')
const plant = require('./plant')

const schema = makeExecutableSchema({
    typeDefs: [
        categorySchema.typeDefs,
        authenticate.typeDefs,
        plant.typeDefs
    ],
    resolvers: merge(
        categorySchema.resolver,
        authenticate.resolver,
        plant.resolver
    )
})

module.exports = schema