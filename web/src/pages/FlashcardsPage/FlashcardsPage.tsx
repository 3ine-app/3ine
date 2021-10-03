import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import FlashCardsCell from 'src/components/FlashCardsCell'
import { mergeClassName } from 'src/utils'

// TODO: Move to global level
const TAGS = [
  'grape',
  'region',
  'colour',
  'sat',
  'aroma',
  'terroir',
  'tasting',
  'labelling',
  'appellation',
  'stainless steel',
  'inert vessels',
  'fermentation',
  'food pairing',
  'temperature',
  'winemaking',
  'white',
  'red',
  'sweet',
  'chardonnay',
  'riesling',
  'sauvignon blanc',
  'palates',
  'blending',
  'vintage',
  'maturation',
  'secondary',
  'botrytis',
  'wine 101',
  'storage',
  'ageing',
  'sparkling',
  'fortified',
]
const FlashcardsPage = () => {
  const randomIndex = Math.floor(Math.random() * TAGS.length)
  const [currentTags, setCurrentTags] = useState(
    TAGS.slice(randomIndex, randomIndex + 1)
  )

  return (
    <>
      <MetaTags
        title="Flashcards"
        // description="Flashcards description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <div className="flex gap-2 flex-wrap">
        {TAGS.map((tag, index) => (
          <button
            key={`tag-btn-${index}`}
            className={mergeClassName(
              'btn btn-xs md:btn-sm lg:btn-md btn-primary rounded-lg md:rounded-xl lg:rounded-2xl',
              currentTags.includes(tag) ? 'btn-active' : 'btn-outline'
            )}
            onClick={() => {
              if (currentTags.includes(tag)) {
                setCurrentTags(currentTags.filter((t) => t !== tag))
              } else {
                setCurrentTags([...currentTags, tag])
              }
            }}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="my-20 flex justify-center">
        <FlashCardsCell tags={currentTags} />
      </div>
    </>
  )
}

export default FlashcardsPage
