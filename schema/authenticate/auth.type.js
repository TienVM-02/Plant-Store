const gql = require('graphql-tag')

const typeDefs = gql`
    type Account {
        id: Int!
        userName: String
        password: String
        roleId: String
        isActive: Boolean
        createAt: String
        updateAt: String
    }

    type Message {
        message: String
        status_code: Int
        success: Boolean
        accessToken: String
    }

    type User {
        userName: String
        roleId: String
    }

    type Mutation {
        signUp(input: AccountMutation): Boolean
        checkExist(input: AccountMutation): Boolean
        signIn(input: AccountMutation): Message
        checkAuthen(input: AccountMutation): User
    }

    input AccountMutation {
        userName: String
        password: String
        roleId: String
        token: String
    }
`
module.exports = typeDefs