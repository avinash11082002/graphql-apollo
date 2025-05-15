# GraphQL Server with Node.js and Apollo

This project is a GraphQL server built using Node.js and Apollo Server, designed to demonstrate the principles and capabilities of GraphQL. It was developed as part of a comprehensive tutorial by The Net Ninja, focusing on building a robust, data-driven application.

## Features

- Efficiently fetch data with a single request instead of multiple endpoints.
- Fetch related data and nested properties in a single query.
- Add, update, and delete records using GraphQL mutations.
- Apollo Explorer to test and explore the queries easily.

## Technologies Used

- Node.js
- Apollo Server
- GraphQL
- npm
- JavaScript

Usage
This GraphQL server uses a schema that defines types for authors, reviews, and games. You can execute queries and mutations to interact with the data.

**GraphQL Queries**
Here are a few examples of queries you can make:

**Fetch all games:**

query gamesQuery{
  games {
    id,
    title,
    platform
  }
}

Fetch a single game by ID:

graphql

query gameQuery($id: ID!){
  author(id: $id){
    title,
    platform,
    reviews {
      rating,
      content
    }
  }
}
Mutations
You can add and update data using mutations. Here are some examples:

**Add a new game:**
mutation addGame($title: String!, $platform: [String!]!){
  addGame(title: $title, platform: $platform) {
    id,
    title,
    platform
  }
}

**Update an existing game:**
mutation updateGame($id: ID!, $edits: EditGameInput!){
  updateGame(id: $id, edits: $edits){
    id,
    title,
    platform
  }
}

**Delete a game:**
mutation deleteGame($id: ID!){
  deleteGame(id: $id) {
    id,
    title,
    platform
  }
}
