import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { schema } from './graphql'

const app = express()
app.use(cors())

const server = new ApolloServer({
    schema,
    playground: true,
    introspection: true,
})

const middleware = async() => {await server.applyMiddleware({ app })}

middleware()

app.listen(5001, () =>{
    console.log("http://localhost:5001")
})