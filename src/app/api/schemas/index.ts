export const typeDefs = `#graphql
  type HelloPayload {
    message: String!
  }

  type Query {
    hello: HelloPayload!
  }
`;
