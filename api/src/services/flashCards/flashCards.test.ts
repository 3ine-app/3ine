import { flashCards, updateFlashCard } from './flashCards'
import type { StandardScenario } from './flashCards.scenarios'

describe('flashCards', () => {
  scenario('returns all flashCards', async (scenario: StandardScenario) => {
    const result = await flashCards()

    expect(result.length).toEqual(Object.keys(scenario.flashCard).length)
  })

  scenario('take (limit) flashcards', async () => {
    const result = await flashCards({ take: 2 })

    expect(result.length).toEqual(2)
  })

  scenario('update flashcard', async (scenario: StandardScenario) => {
    const newAnswer = 'Answer 1 is updated'
    const result = await flashCards()
    const updatedFlashcard = await updateFlashCard({
      id: result[0].id,
      data: { answer: newAnswer },
    })

    expect(updatedFlashcard.question).toEqual(scenario.flashCard.one.question)
    expect(updatedFlashcard.answer).not.toEqual(scenario.flashCard.one.answer)
    expect(updatedFlashcard.answer).toEqual(newAnswer)
  })
})
