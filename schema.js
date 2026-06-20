export const typeDefs = `#graphql
  type Game {
    id: ID!,
    title: String!,
    platform:[String]!
  }
  type Review {
    id: ID!,
    rating: int!,
    content: String!,
    game: Game!
  }
  type Author {
    id: ID!,
    name: String!,
    verified: Boolean!
  }
`;
//there are 5 types of data types in graphql
//1. Scalar types: Int, Float, String, Boolean, ID 