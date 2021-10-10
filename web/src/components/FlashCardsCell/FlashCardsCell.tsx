import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMemo } from 'react'
import { BiMessageRoundedError } from 'react-icons/bi'
import { ImFileEmpty } from 'react-icons/im'
import type { FlashCardsQuery } from 'types/graphql'
import FlashCards from './FlashCards'

export const QUERY = gql`
  query FlashCardsQuery($tags: [String!], $take: Int) {
    flashCards(tags: $tags, take: $take) {
      id
      tags
      answer
      question
    }
  }
`

export const Loading = () => (
  <div
    style={{ minWidth: '320px' }}
    className="carousel flashcards rounded-box bg-gradient-to-t from-neutral to-secondary"
  >
    <div className="flashcard bg-base-100 mx-auto mt-5 rounded-xl animate-pulse"></div>
  </div>
)

export const Empty = () => (
  <div
    style={{ minWidth: '320px' }}
    className="carousel flashcards rounded-box bg-gradient-to-t from-neutral to-secondary"
  >
    <div className="flashcard glass mx-auto mt-5 rounded-xl">
      <div className="flex flex-col items-center justify-center h-full text-primary-content">
        <ImFileEmpty size={40} className="mb-2" />
        Not found
      </div>
    </div>
  </div>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div
    style={{ minWidth: '320px' }}
    className="carousel flashcards rounded-box bg-gradient-to-t from-neutral to-secondary"
  >
    <div className="flashcard glass mx-auto mt-5 rounded-xl">
      <div className="flex flex-col items-center justify-center h-full text-primary-content">
        <BiMessageRoundedError size={48} className="mb-2" />
        {error.message}
      </div>
    </div>
  </div>
)

export const Success = ({ flashCards }: CellSuccessProps<FlashCardsQuery>) => {
  const flashcardGroups = useMemo(
    () =>
      flashCards.reduce((prev, flashcard, index) => {
        const group = Math.floor(index / 20)

        prev[group] = prev[group] || []
        prev[group].push(flashcard)
        return prev
      }, []),
    [flashCards]
  )

  return (
    <div className="flex gap-6 flex-wrap justify-center">
      {flashcardGroups.map((group, index) => (
        <FlashCards key={`flashcards-${index}`} flashCards={group} />
      ))}
    </div>
  )
}
