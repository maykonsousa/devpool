export const typeDefs = `#graphql
  type HelloPayload {
    message: String!
  }

  enum UserType {
    admin
    developer
    recruiter
    
  }

  enum Status {
    success
    error
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
  input GetUserByEmailInput {
    email: String!
  }

  type GetUserByEmailPayload {
    user: User
    status: String!
    message: String! 
  }

  type getAllUsersPayload {
    users: [User!]
    status: Status!
    message: String!
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
    status: Status!
    message: String!
    
  }

  type Query {
    hello: HelloPayload!
    getAllUsers: getAllUsersPayload!
    getUserByEmail(input: GetUserByEmailInput!): GetUserByEmailPayload!
  }
  type Mutation {
    createUser(input: UserInput): CreateUserPayload!
  }
`;
