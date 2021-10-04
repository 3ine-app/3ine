import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.FlashCardCreateArgs>({
  flashCard: {
    one: {
      data: {
        id: 'de589e54-c90d-4319-8ef3-fd73c7de2a21',
        question: 'Question 1',
        answer: 'Answer 1',
      }
    },
    two: {
      data: {
        id: 'de589e54-c90d-4319-8ef3-fd73c7de2a22',
        question: 'Question 2',
        answer: 'Answer 2',
      }
    },
    three: {
      data: {
        id: 'de589e54-c90d-4319-8ef3-fd73c7de2a23',
        question: 'Question 3',
        answer: 'Answer 3',
      }
    },
  },
})

export type StandardScenario = typeof standard
