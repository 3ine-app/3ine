export const schema = gql`
  type FlashCard {
    id: String!
    tags: String
    answer: String!
    question: String!
    updatedAt: DateTime
    createdAt: DateTime!
  }

  type Query {
    flashCards(take: Int): [FlashCard!]!
  }

  type Mutation {
    updateFlashCard(id: String!, data: UpdateFlashCardInput): FlashCard!
    createFlashCard(data: CreateFlashCardInput!): FlashCard!
    deleteFlashCard(id: String!): Boolean!
  }

  input CreateFlashCardInput {
    question: String!
    answer: String!
    tags: String
  }

  input UpdateFlashCardInput {
    question: String
    answer: String
    tags: String
  }
`
