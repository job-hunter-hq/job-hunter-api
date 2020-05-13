import {gql} from 'apollo-server-express'

export const typeDefs = gql`
    type Query{
        hello: String!
        applications: [Application!]!
    }

    type Application{
        id: ID!
        name: String!
        contact: String!
        status: String
        salary: Int
        date_applied: String!
    }

    type Mutation{
        createApplication(
            name: String!
            contact: String!
            status: String
            salary: Int
            date_applied: String!
        ): Application!
    }
`
// type Cat{
//     id: ID!
//     name: String!
// }
//
// type Mutation {
//     createCat(name: String!): Cat!
// }
