const express = require('express')
const app = express()
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema')


require('dotenv').config()
const port = 3011

app.listen(port, () => {
    console.log(`Server listen port: ${port}`)
})
app.use('/plant', graphqlHTTP({
    schema: schema,
    graphiql: true
}))