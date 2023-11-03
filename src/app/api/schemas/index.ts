export const typeDefs = `#graphql
  type HelloPayload {
    message: String!
  }

  enum UserType {
    admin
    developer
    recruiter
    
  }

  type User {
    id: String
    name: String
    email: String
    type: UserType
    username: String
    avatar_url: String
    cover_url: String
    password: String
    createdAt: String
    updatedAt: String

  }

  input UserInput {
    name: String
    email: String
    type: UserType
    username: String
    avatar_url: String
    cover_url: String
    password: String
  }

  type CreateUserPayload {
    status: String!
    message: String!
    
  }

  type Query {
    hello: HelloPayload!
    getAllUsers: [User!]
  }
  type Mutation {
    createUser(input: UserInput): CreateUserPayload!
  }
`;
