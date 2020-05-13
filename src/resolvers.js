import {Cat} from './models/Cat'
import {Application} from './models/Application'

export const resolvers = {
    Query: {
        hello: () => 'hello',
        applications: Application.find()
    },
    Mutation: {
        createApplication: async (_, {name, contact, status, salary, date_applied}) => {
            const job = new Application({
                name,
                contact,
                status,
                salary,
                date_applied
            })
            await job.save()
            return job
        }
    }
}

// Query: {
//     hello: () => 'hello',
//     cats: () => Cat.find()
// },
// Mutation: {
//     createCat: async (_, {name}) => {
//         const kitty = new Cat({name})
//         await kitty.save()
//         return kitty
//     }
// }
