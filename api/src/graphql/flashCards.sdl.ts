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
    flashCards(tags: [String!], take: Int): [FlashCard!]! @skipAuth
  }

  type Mutation {
    updateFlashCard(id: String!, data: UpdateFlashCardInput): FlashCard!
      @requireAuth
    createFlashCard(data: CreateFlashCardInput!): FlashCard! @requireAuth
    deleteFlashCard(id: String!): Boolean! @requireAuth
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
