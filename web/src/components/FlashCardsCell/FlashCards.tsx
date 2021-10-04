import type { CellSuccessProps } from '@redwoodjs/web'
import { useEffect, useRef, useState } from 'react'
import { mergeClassName } from 'src/utils'
import type { FlashCardsQuery } from 'types/graphql'
import FlashCard from '../FlashCard/FlashCard'

const FlashCards = ({ flashCards }: CellSuccessProps<FlashCardsQuery>) => {
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
      style={{ minWidth: '320px' }}
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
            className="bg-base-100 font-open-sans"
          />
        </div>
      ))}
      <div className="sticky flex items-end right-1/2 transform translate-x-1/2 mb-6">
        {flashCards.map((_, index) => (
          <div
            key={`flashcards-cell-${index}`}
            className={mergeClassName(
              'h-3 w-1 rounded-sm bg-base-100 mx-0.5 transform transition-opacity duration-200',
              position !== index && 'opacity-20'
            )}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default FlashCards
