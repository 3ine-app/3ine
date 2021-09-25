import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useEffect, useRef, useState } from 'react'
import { BiMessageRoundedError } from 'react-icons/bi'
import { ImFileEmpty } from 'react-icons/im'
import { mergeClassName } from 'src/utils'
import type { FlashCardsQuery } from 'types/graphql'
import FlashCard from '../FlashCard/FlashCard'

export const QUERY = gql`
  query FlashCardsQuery($take: Int) {
    flashCards(take: $take) {
      id
      tags
      answer
      question
    }
  }
`

export const Loading = () => (
  <div className="carousel flashcards rounded-box bg-gradient-to-t from-neutral to-primary">
    <div className="flashcard bg-base-100 mx-auto mt-5 rounded-xl animate-pulse"></div>
  </div>
)

export const Empty = () => (
  <div className="carousel flashcards rounded-box bg-gradient-to-t from-neutral to-primary">
    <div className="flashcard glass mx-auto mt-5 rounded-xl">
      <div className="flex flex-col items-center justify-center h-full text-primary-content">
        <ImFileEmpty size={40} className="mb-2" />
        Not found
      </div>
    </div>
  </div>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div className="carousel flashcards rounded-box bg-gradient-to-t from-neutral to-primary">
    <div className="flashcard glass mx-auto mt-5 rounded-xl">
      <div className="flex flex-col items-center justify-center h-full text-primary-content">
        <BiMessageRoundedError size={48} className="mb-2" />
        {error.message}
      </div>
    </div>
  </div>
)

export const Success = ({ flashCards }: CellSuccessProps<FlashCardsQuery>) => {
  const [position, setPosition] = useState(0)
  const ref = useRef<HTMLDivElement>()

  useEffect(
    () => {
      ref.current.addEventListener('scroll', () => {
        const step = ref.current.scrollWidth / flashCards.length - 12
        const pos = ref.current.scrollLeft / step
        const relativePos = Math.min(
          Math.ceil(pos),
          Math.round(parseFloat(pos.toPrecision(3)))
        )

        setPosition(relativePos)
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <div
      ref={ref}
      className="carousel flashcards rounded-box bg-gradient-to-t from-neutral to-primary"
    >
      {flashCards.map(({ id, answer, question }) => (
        <div
          key={id}
          className="carousel-item w-full mt-6 flex-col items-center"
        >
          <FlashCard
            answer={answer}
            question={question}
            className="bg-base-100 font-mono"
          />
        </div>
      ))}
      <div className="sticky flex items-end right-1/2 transform translate-x-1/2 mb-6">
        {flashCards.map((_, index) => (
          <div
            key={index}
            className={mergeClassName(
              'h-3 w-1 rounded-sm bg-accent mx-0.5 transform transition-opacity duration-200',
              position !== index && 'opacity-20'
            )}
          ></div>
        ))}
      </div>
    </div>
  )
}
