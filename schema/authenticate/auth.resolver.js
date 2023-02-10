const {
signUp, checkExist, signIn, checkAuthen
} = require ('../../repository/auth.repository')

const resolver = {
    Mutation: {
        signUp: (parent, {input}, context, info) => {
            console.log(input)
            return signUp(input)
        },

        checkExist: (parent, {input}, context, info) => {
            return checkExist(input)
        },
        
        signIn: (parent, {input}, context, info) => {
            return signIn(input)
        },
        checkAuthen: (parent, {input}, context, info) => {
            return checkAuthen(input.token)
        }
    }
}

module.exports = resolver