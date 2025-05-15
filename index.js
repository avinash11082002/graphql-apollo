import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./_db.js";
import { typeDefs } from "./schema.js";

const resolvers = {
    Query: {
        reviews() {
            return db.reviews
        },
        games() {
            return db.games
        },
        authors() {
            return db.authors
        },
        review(_,args) {
            return db.reviews.find(review => review.id === args.id)
        },
        game(_,args) {
            return db.games.find(game => game.id === args.id)
        },
        author(_,args) {
            return db.authors.find(author => author.id === args.id)
        },
    },
    Game:{
        reviews(parent) {
            return db.reviews.filter(r => r.game_id === parent.id)
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter(r => r.author_id === parent.id)
        }
    },
    Review: {
        author(parent) {
            return db.authors.find(author => author.id === parent.author_id)
        },
        game(parent) {
            return db.games.find(game => game.id === parent.game_id)
        }
    },
    Mutation: {
        deleteGame(_,args) {
            db.games = db.games.filter(game => game.id !== args.id)
            return db.games
        },
        addGame(_,args) {
            const newGame = {
                id: String(db.games.length + 1),
                title: args.title,
                platform: args.platform
            }
            db.games.push(newGame)
            return newGame
        },
        updateGame(_,args) {
            const game = db.games.find(game => game.id === args.id)
            if (!game) {
                throw new Error('Game not found')
            }
            if (args.edits.title) {
                game.title = args.edits.title
            }
            if (args.edits.platform) {
                game.platform = args.edits.platform
            }
            return game
        }
    }
     
}


const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
    })

console.log('Server ready at port', 4000)


