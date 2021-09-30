import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import FlashCardsCell from 'src/components/FlashCardsCell'
import { mergeClassName } from 'src/utils'

// TODO: Move to global level
const TAGS = [
  'favorite',
  'grape',
  'region',
  'terroir',
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
  'sparkling',
  'fortified',
  'wine 101',
  'random',
  'storage',
  'ageing',
]
const FlashcardsPage = () => {
  const [currentTag, setCurrentTag] = useState(TAGS[0])

  return (
    <>
      <MetaTags
        title="Flashcards"
        // description="Flashcards description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <div className="carousel rounded-box shadow-2xl">
        {TAGS.map((tag, index) => (
          <div key={index} className="carousel-item">
            <div className="stack my-8 mx-2 font-gruppo">
              <button
                onClick={() => {
                  setCurrentTag(tag)
                }}
                className={mergeClassName(
                  'rounded-xl text-primary-content hover:bg-primary-focus',
                  currentTag === tag ? 'bg-primary-focus' : 'bg-primary'
                )}
              >
                <div className="py-6 text-shadow capitalize">{tag}</div>
              </button>
              <div
                className={mergeClassName(
                  'text-center w-36 card bg-primary text-primary-content',
                  currentTag === tag && 'animate-pulse'
                )}
              >
                <div className="py-6 capitalize">{tag}</div>
              </div>
              <div
                className={mergeClassName(
                  'text-center w-36 card bg-primary text-primary-content',
                  currentTag === tag && 'animate-pulse'
                )}
              >
                <div className="py-6 capitalize">{tag}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="sm:flex sm:justify-center my-20">
        {currentTag === 'favorite' ? (
          <FlashCardsCell take={0} />
        ) : (
          <FlashCardsCell tags={[currentTag]} />
        )}
      </div>
    </>
  )
}

export default FlashcardsPage
